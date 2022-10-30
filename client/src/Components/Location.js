import { useState, useEffect } from 'react';
import { MarkerF } from '@react-google-maps/api';
import locationMarker from '../Assets/locationMarker.png'

export default function Location() { 

    const [location, setLocation] = useState(null);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    
    const success = (pos) => {
        const cords = pos.coords
        if(cords.latitude !== undefined && cords.longitude !== undefined) {
            const currentLocation = { lat:cords.latitude, lng: cords.longitude }
            setLocation(currentLocation)
        }
        
    }
    
    const err = (err) => {
        console.error(`ERROR(${err.code}): ${err.message}`)
    }
    
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(success, err, options)
    }

    useEffect(()=>{
        const id = setInterval(getLocation, 5000);

        return () => {
            clearInterval(id)
        }
    },[])
    return (
        <>
            {location &&
            <MarkerF 
                position={location}
                zIndex={100}
                icon={{
                    url:locationMarker,
                    scaledSize:{
                        width:20,
                        height:20
                    }
                }}   
            />}
        </>
    )
}


