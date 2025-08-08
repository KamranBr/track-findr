import React, { useEffect, useState} from 'react';
import Map from './components/Map';
import './App.css';
import { LoadScript} from '@react-google-maps/api';




function App() {
  const [backendData, setBackendData] = useState([{}]);

  //here we fetch data from the backend. The forward proxy (added in the json file) allows us to communicate with the backend through a 
  //proxy server that acts as a middle man for communication. This proxy allows us to shorten the URL path rather then mentioning the port (localhost:3001)
  useEffect(  ()=> { 
    fetch("/api")
      .then(response => response.json()) //the response is the json from the backend
      .then(data => {  //data is whatever data was in the json file from the backend 
        setBackendData(data);
      });
  }, []); //empty array means that the useEffect block only runs on the first render ( rerender occurs once the useState changes for example)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
        libraries={['geometry', 'drawing', 'places']}
      >
      <Map/>
      </LoadScript>
    {/* Simple display of API response */}
      <div style={{ position: "absolute", top: 10, left: 10, background: "white", padding: "10px" }}>
        <h3>Backend Data:</h3>
        <pre>{JSON.stringify(backendData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

