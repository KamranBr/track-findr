import React from 'react';
import Map from './components/Map';
import './App.css';
import { LoadScript} from '@react-google-maps/api';




function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
        libraries={['geometry', 'drawing', 'places']}
      >
      <Map/>
      </LoadScript>
    </div>
  );
}

export default App;
