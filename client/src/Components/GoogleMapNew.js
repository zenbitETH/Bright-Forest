import axios from 'axios';
import {useRef, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {GoogleMap, MarkerF, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';
import * as timer from "../Scripts/timer";
import {calcArea} from "../Scripts/zone";
import tripData from "../Data/trips.json"
import bflogo from '../Assets/BFlogo.svg'

export default function GoogleMap2 (){
    const center = {lat:20.59400978585176,lng:-100.40928572380896}
    const containerStyle = {
        width: '100%',
        height: '100vh',
    
    };

    const [sites, setSites] = useState([]);
    const [destination, setDestination] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [trip, setTrip] = useState(null);

    const poiMarkers = () => {
        const validSites = tripData.filter((item) => (item.startLocation?.coordinates !== undefined))
        setSites(validSites)
    }

    const startTrip = async (location) => {
        setDestination(location.endLocation.coordinates)
        setOrigin(location.startLocation.coordinates)
    }
    
    const handleTrip = async(response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setTrip(() => (response))
            } else {
                 console.log('response', response)
            }
        }
        clearStates();
    }
    const clearStates = async () => {
        console.log(trip)
        setDestination(null);
        setOrigin(null);
    }
   
    useEffect(() => {
        poiMarkers()
    }, [])
    
    return (
    <>
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={{
                disableDefaultUI:true
            }}
        >
            {sites.map((location, index) =>(
                <MarkerF
                key={index}
                onClick={() => {startTrip(location)}}
                icon ={{
                    url:bflogo,
                    scaledSize:{
                        width:50,
                        height:50
                    },
                }}
                position={location.startLocation.coordinates}
                />
                ))}
                
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
            <DirectionsRenderer 
                directions={trip} 
                options={{
                    suppressBicyclingLayer:true,
                    suppressMarkers:true
                }}
                
                />}
        </GoogleMap>
    </>
    );
}