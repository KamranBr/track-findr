import React from 'react';
import {GoogleMap} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function Map() {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
    </GoogleMap>
  );
}

export default Map;