//This file (all files in this folder) creates the function that the contoller, which packages and verifies the api request from the fronten, uses to send back.
//It formats and makes the actual request to the API.
import axios from "axios"; //Axios makes getting api requests easier. Substitute of 'fetch' which is a build in JS feature

//this is the function to be exported. It is async meaning that once a process starts the next process is started without waiting for it to finish. 
//The async function returns a promise, which is an object that represents a value that might not be available yet but will be resolved ( because the process isnt waited on to be finished)
//async functions can use await which makes the function wait for that processs to finish (the promise is resolved )before moving on
export const getTracksFromOverpass = async (lat, length, radius = 10000 ) => {
    const query = `
        [out:json];
        (
            node["lesisure"="track"](around:${radius},${lat},${lng});
        );
        out body;
    `;

    //here we are fetching the data from the overpass API. We yse axios.post, which means we 'POST'ing to the url. Sometimes you use
    //get if you are just requesting data that the website doens't require parameters for, but if the websites requires the user
    //to send additional data such as filtering the contents of the data then you may need to use .post to send the data. Here 
    //we have the url we are visiting with the query that we want to filter with. 
    const response = await axios.post(
        "https://overpass-api.de/api/interpreter",
        query,
        { headers: { "Content-Type": "text/plain" } }

    );

    //axios parses the json for us so we can just access the json file right away
    return response.data.elements //overpass sends back a json file and the information we want is the elements key (which contains that track data) (data just means what is sent back from the api which is json in this case)
}