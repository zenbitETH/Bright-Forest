import {useRef, useState} from 'react';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const center = [
    {lat: 25.761681, lng: -80.191788},
    {lat: 25.98791, lng: -80.30057}
];

const lib = ['geometry', 'places','drawing'];

function GoogleTest() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries: lib
    })

    const [map, setMap] = useState(null);
    const [directionsResult, setDirectionsResult] = useState(null);

    const originRef = useRef();
    const destinationRef = useRef();

    if (!isLoaded) {
        return <h1>Loading the map!</h1>
    }

    async function calculateRoute() {
    
        if (originRef.current === '' || destinationRef.current === '') {
            return
        }
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current,
            destination: destinationRef.current,
            travelMode: window.google.maps.TravelMode.Bicycling
        })

        setDirectionsResult(results);
    }
    
    function clearRoute() {
        setDirectionsResult(null)
        originRef.current = ''
        destinationRef.current = ''
    }
    
    return isLoaded ? (
        <div className="flex flex-col justify-center items-center">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center[0]}
                zoom={10}
                onLoad={map => setMap}
            >
            <Marker
                icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 7,
                }}
                position={center[1]}
                />
                {directionsResult && (<DirectionsRenderer directions={directionsResult} />)}
            </GoogleMap>
            <form>
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
                <button type="submit"onClick={calculateRoute} method="post">Submit</button>
            </form>
        </div>
    ) : <></>
}

export default GoogleTest;
