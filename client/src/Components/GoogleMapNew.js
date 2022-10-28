import axios from 'axios';
import {useRef, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {GoogleMap, MarkerF, Polyline} from '@react-google-maps/api';
import * as timer from "../Scripts/timer";
import {calcArea} from "../Scripts/zone";
import tripData from "../Data/trips.json"
import bflogo from '../Assets/BFlogo.svg'

export default function GoogleMap2 (){
    const center = {lat:20.59400978585176,lng:-100.40928572380896}
    const destinations = [{lat: 25.761681, lng: -80.191788},
        {lat: 25.98791, lng: -80.30057}]
    const containerStyle = {
        width: '100%',
        height: '100vh',
    
    };
    const [sites, setSites] = useState([]);

    const poiMarkers = () => {
        const validSites = tripData.filter((item) => (item.startLocation?.coordinates !== undefined))
        setSites(validSites)
    }

    const startTrip = async (location) => {

    }
    
    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ],
        zIndex: 1
      };

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
            {sites.map((location) =>(
                <MarkerF
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
            <Polyline options={options}/>
        </GoogleMap>
    </>
    );
}