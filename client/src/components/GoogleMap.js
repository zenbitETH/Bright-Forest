import {useRef, useState} from 'react';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
    width: '100%',
    height: '700px',
    align: 'center'
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

    const originRef = useRef();
    const destinationRef = useRef();

    if (!isLoaded) {
        return <h1>Loading the map!</h1>
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
    }
    
    function clearRoute() {
        setDirectionsResult(null)
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
                    scale: 7,
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
                <button onClick={calculateRoute}>Submit</button>
                <button onClick={clearRoute}>Clear</button>
        </div>
    ) : <></>
}

export default GoogleTest;