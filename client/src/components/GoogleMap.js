import React, {useState, useCallback, useEffect} from 'react'
import { GoogleMap, useJsApiLoader , Marker, DirectionsService, DirectionsRenderer} from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '700px'
};

const center = [
    {
    lat: 25.761681,
    lng: -80.191788
    },
    { 
    lat: 25.98791,
    lng: -80.30057
    }
];

function MyComponent() {
    const mapsKey = process.env.REACT_APP_MAPS_API_KEY;
    const geoKey = process.env.REACT_APP_GEOLOCATION_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: mapsKey
    })

    const directionsService = new window.google.maps.DirectionsService();

    const [map, setMap] = useState(null);
    const [location, setLocation] = useState({});

    directionsService.route(
        {
            origin:center[1],
            destination: center[0],
            travelMode: window.google.maps.TravelMode.BICYCLING
        },
        (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                setLocation({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );


    const getLocation = async() => {
        // const headers = {};
        // const response = await axios.post(
        //     ""
        // )
        // const data = await response.json();
        // setLocation(data);
        return({location:{lat: 25.98791, lng:-80.30057}})
    }

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center[0]);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center[0]}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
        <Marker
            icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 7,
            }}
            position={center[1]}
        />
        <DirectionsRenderer
        directions={location}
        />
        </GoogleMap>


    ) : <></>
}

export default React.memo(MyComponent);
