import React, {useState, useCallback, useEffect} from 'react'
import {DirectionsRenderer, useJsApiLoader} from '@react-google-maps/api';


const center = [
    {lat: 25.761681, lng: -80.191788},
    {lat: 25.98791, lng: -80.30057}
];

const Directions = async () => {
    const mapsKey = process.env.REACT_APP_MAPS_API_KEY;

    const DirectionsService = new window.google.maps.DirectionsService();
    // const [location, setLocation] = useState({});
    // const results = await DirectionsService.route(
    //     {
    //         origin: new window.google.maps.LatLngBounds(center[1]),
    //         destination: new window.google.maps.LatLngBounds(center[0]),
    //         travelMode: window.google.maps.TravelMode.BICYCLING
    //     },
    //     (result, status) => {
    //         if (status === window.google.maps.DirectionsStatus.OK) {
    //             setLocation({
    //                 directions: result
    //             });
    //         } else {
    //             console.error(`error fetching directions ${result}`);
    //         }
    //     }
    // );

    // console.log(results);
}

export default Directions;