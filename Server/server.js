const express = require('express');
const app = express();

//app.get is a route handler for HTTP GET requests (from the front end) where /api is the URL path that the route is listening for.
//Once the backend URL (/api) is visisted with a GET requests, req contains the info about the incoming request from the client side 
// while res is the object used to send a response back to the client side.
app.get("/api", (req,res) => {
    //sending an array of users back in json format back to the frontend
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

//backend is listening on port 5000 and the arrow function is the message to show that it is listening (callback function)
app.listen(3001, () => {console.log("Server started on port 3001");
    
});