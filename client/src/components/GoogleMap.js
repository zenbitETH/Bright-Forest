import * as timer from "../Scripts/timer";
import {calcArea} from "../Scripts/zone";
import bflogo from '../Assets/BFlogo.svg'
import tripData from '../Data/trips.json'
import mapStyle from '../Data/mapStyle.json'
import Location from './Location'
import { useNavigate } from "react-router-dom"
import {useRef, useState, useEffect} from 'react'
import {GoogleMap, MarkerF, DirectionsService, DirectionsRenderer} from '@react-google-maps/api'

export default function Map ({ id }){
    const center = {lat:20.59400978585176,lng:-100.40928572380896}
    const containerStyle = {
        width: '100%',
        height: '100vh',
    
    };

    const [destination, setDestination] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [preciseDestination, setPreciseDestination] = useState(null);
    const [preciseOrigin, setPreciseOrigin] = useState(null);
    const [trip, setTrip] = useState(null);
    const [location, setLocation] = useState(null);
    const markers = [];

    const poiMarker = () => {
        const data = tripData.filter((item) => (item.id == id))
        const projectData = data[0]

        if (projectData?.startLocation?.coordinates !== undefined){
            setLocation(projectData)
        } else {
            console.log("Something went wrong pulling project data!")
        }
    }

    const startTrip = async (location) => {
        endTrip()
        clearMarkers(markers)
        setDestination(location.endLocation.coordinates)
        setOrigin(location.startLocation.coordinates)
    }

    const endTrip = () => {
        setTrip(null)
        setPreciseDestination(null)
        setPreciseOrigin(null)
        clearCoordinates()
    }
    
    const handleTrip = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setTrip(() => (response))
                setPreciseDestination({lat:response.routes[0].legs[0].end_location.lat(), lng:response.routes[0].legs[0].end_location.lng()})
                setPreciseOrigin({lat:response.routes[0].legs[0].start_location.lat(), lng:response.routes[0].legs[0].start_location.lng()})
            } else {
                 console.log('response', response)
            }
        }
        clearCoordinates()
    }
   
    const clearMarkers = (markers) => {
        markers.forEach((marker) =>{
            marker.setMap(null);
        })
        markers = []
    }
    const clearCoordinates = async () => {
        setOrigin(null);
        setDestination(null)
    }
   
    useEffect(() => {
        poiMarker()
    }, [])
    
    return (
    <>
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={{
                styles:mapStyle,
                disableDefaultUI:true
            }}
        >
            <Location />

            { location &&
                <MarkerF
                    onClick={() => {startTrip(location)}}
                    onLoad={(marker) => {markers.push(marker)}}
                    icon ={{
                        url:bflogo,
                        scaledSize:{
                            width:50,
                            height:50
                        },
                    }}
                    position={location.startLocation.coordinates}
                    />
            }
                
            {(origin && destination) &&
            <DirectionsService
                options={{
                    destination: destination,
                    origin: origin,
                    travelMode: window.google.maps.TravelMode.BICYCLING
                }}
                callback={handleTrip}
                
            />}
            { trip && 
            <>
                <DirectionsRenderer 
                    directions={trip} 
                    options={{
                        suppressBicyclingLayer:true,
                        suppressMarkers:true
                    }}
                    
                    />
                <MarkerF 
                    position={preciseOrigin}
                    icon ={{
                        url:bflogo,
                        scaledSize:{
                            width:50,
                            height:50
                        }
                    }}   
                />
                <MarkerF 
                    position={preciseDestination}
                    icon ={{
                        url:bflogo,
                        scaledSize:{
                            width:50,
                            height:50
                        }
                    }}   
                />
            </>
                }
        </GoogleMap>
    </>
    );
}