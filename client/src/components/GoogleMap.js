import axios from 'axios';
import {useRef, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import * as timer from "../Scripts/timer";
import {calcArea} from "../Scripts/zone";
import tripData from "../Data/trips.json"

const containerStyle = {
    width: '100%',
    height: '100',
    align: center

};



const lib = ['geometry', 'places','drawing'];

const center = [
    {lat: 25.761681, lng: -80.191788},
    {lat: 25.98791, lng: -80.30057}
];

const apiKey = process.env.REACT_APP_MAPS_API_KEY;

function GoogleTest() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries: lib
    })
    const [map, setMap] = useState(null);
    const [directionsResult, setDirectionsResult] = useState(null);
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [location, setLocation] = useState(null);
    const [marker, setMarker] = useState(null);

    const navigate = useNavigate()

    const originRef = useRef();
    const destinationRef = useRef();

    // Poll location every 30 seconds.
    setInterval(checkProximity(tripData), 30000);

    useEffect(() =>{
        if(!marker){
            return
        }
        updateMarker(marker)
    }, [location])

    if (!isLoaded) {
        return <h1>Loading the map!</h1>
    }

    

    async function checkProximity(tripData) {
        const coord = await getCurrentLocation();
        setLocation(coord);
        const tripC = tripData[0].startLocation.coordinates
        const area = calcArea(tripC.lat, tripC.long, 2) // latitude, longitude, and distance in km.

        const result = area.inArea(coord.lat, coord.long)
        if(result){
            routeDetected(tripData)
            navigate("/trip2")
        }
    }
    async function getCurrentLocation() {
        const request = {
            "homeMobileCountryCode": 310,
            "homeMobileNetworkCode": 410,
            "radioType": "gsm",
            "carrier": "Vodafone",
            "considerIp": true,
            "cellTowers": [
              // See the Cell Tower Objects section below.
            ],
            "wifiAccessPoints": [
              // See the WiFi Access Point Objects section below.
            ]
          }
        const apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`
        const response = await axios.post(apiUrl)
        return response.data.location
    }

    async function updateMarker(marker){
        marker.setPosition(await getCurrentLocation())
        setMarker(marker);
    }

    async function updateMap(map){
        map.panTo(await getCurrentLocation())
        setMap(map)
    }

    async function calculateRoute() {
    
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: window.google.maps.TravelMode.BICYCLING
        })
        console.log(results)
        setDirectionsResult(results);
        setDuration(results.routes[0].legs[0].duration.text)
        setDistance(results.routes[0].legs[0].distance.text)
    }

    async function routeDetected(tripData) {
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: tripData[1].startLocation.address,
            destination: tripData[1].endLocation.address,
            travelMode: window.google.maps.TravelMode.BICYCLING
        })
        console.log(results)
        setDirectionsResult(results);
        setDuration(results.routes[0].legs[0].duration.text)
        setDistance(results.routes[0].legs[0].distance.text)
    }
    
    function clearRoute() {
        setDirectionsResult(null)
        setDuration('')
        setDistance('')
        originRef.current.value = ''
        destinationRef.current.value = ''


    }
    
    return isLoaded ? (
        <div className="flex flex-col justify-center items-center">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center[1]}
                zoom={10}
                onLoad={updateMap}
            >
            <Marker
                icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 4,
                }}
                // position={center[0]}
                onLoad={updateMarker}
                />
                {directionsResult && (<DirectionsRenderer directions={directionsResult} />)}
            </GoogleMap>
                <Autocomplete>
                <input 
                    type='text' 
                    placeholder='Origin' 
                    ref={originRef}
                    className='text-black' />
                </Autocomplete>
                <Autocomplete>
                <input
                    type='text'
                    placeholder='Destination'
                    ref={destinationRef}
                    className='text-black'
                />
                </Autocomplete>
                <div className="flex gap-4 divide-x border-2">
                    <button onClick={calculateRoute}>Submit</button>
                    <button onClick={clearRoute}>Clear</button> 
                    <button onClick={timer.startTimer}>Start Trip</button>
                    <button onClick={timer.clearTimer}>End Trip</button>
                    {/* <button onClick={handleClick}>Page change</button> */}
                    <h1>Distance: {distance}</h1>
                    <h1>Duration: {duration}</h1> 
                </div>
        </div>
    ) : <></>
}

export default GoogleTest;