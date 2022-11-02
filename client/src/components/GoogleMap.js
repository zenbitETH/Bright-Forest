import * as timer from "../Scripts/timer";
import { calcArea } from "../Scripts/zone";
import bflogo from '../Assets/BFlogo.svg'
import mapStyle from '../Data/mapStyle.json'
import Location from './Location'
import { useState, useEffect } from 'react'
import MoonLoader  from 'react-spinners/MoonLoader'
import { GoogleMap, MarkerF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api'

export default function Map ({ data }){

    const arrivalConstant = 0.015 // arrival distance in km
    const containerStyle = {
        width: '100%',
        height: '100vh',
    
    };

    const [center, setCenter] = useState(null)
    const [destination, setDestination] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [preciseDestination, setPreciseDestination] = useState(null);
    const [preciseOrigin, setPreciseOrigin] = useState(null);
    const [trip, setTrip] = useState(null);
    const [location, setLocation] = useState(null);
    const projectData = data;
    const markers = [];

    const centerMap = () => {
        if(data?.startLocation !== undefined){
            setCenter(data?.startLocation?.coordinates)
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

    const detectArrival = (latDestination, lngDestination) => {
        const geoZone = calcArea(latDestination, lngDestination, arrivalConstant)
        if (location !== null){
            return geoZone.inArea(location.lat, location.lng)
        }
        return false;
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
        centerMap()
    }, [])
    
    return (
    <>
        {(center === null || center === undefined) ?
        <div className="h-screen w-full bg-ride-400 flex justify-center items-center">
            <MoonLoader color="#ff9b54" />
        </div>
        :
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={{
                styles:mapStyle,
                disableDefaultUI:true,
                restriction: {
                    latLngBounds:{north: 85, south: -85, west: -180, east: 180},
                    strictBounds: true
                }
            }}
        >
            <Location setMapLocation={setLocation}/>

            { projectData &&
                <MarkerF
                    onClick={() => {startTrip(projectData)}}
                    onLoad={(marker) => {markers.push(marker)}}
                    icon ={{
                        url:bflogo,
                        scaledSize:{
                            width:50,
                            height:50
                        },
                    }}
                    position={projectData.startLocation.coordinates}
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
        }
    </>
    );
}