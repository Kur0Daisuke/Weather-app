// server/index.js

const express = require("express");
const request = require("request");

const PORT = process.env.PORT || 3001;

const app = express();




app.get("/api/:location", (req, res) => {
    let params = req.params;
    let location = params.location.replace(/\s/g, '%20');
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=YC4WKNSCUSVJP6ASN9JKJFRLA&contentType=json`;
    request(url, (error, response, body) => {
        // Printing the error if occurred
        if (error) console.log(error)
     
        // Printing status code
        // console.log(response.statusCode);
     
        // Printing body
        res.json({ message: body });
        
    });
    
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});