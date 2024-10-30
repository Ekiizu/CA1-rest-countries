
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const MapComponent = ({ lat, lng }) => {
    const center = {
        lat: lat, // Use the passed latitude
        lng: lng, // Use the passed longitude
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBGdtEDvpNWGUETlOYGG9aOECeMfku7r10"> 
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} /> {/* Place a marker at the country location */}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;

