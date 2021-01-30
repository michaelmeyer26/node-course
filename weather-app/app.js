const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (location === undefined) {
    console.log ('Please enter a location.');
} else {
    geocode(location, (error, geocodeData) => {
        //Could also use an else statement to wrap forecast in, but this works stops program from running as well.
        //This is a common way of doing it so it's good to get exposure to it
        if (error) {
            return console.log('Error: ', error);
        } 
    
        forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error);
            }
            
            console.log(geocodeData.location);
            console.log(forecastData);
          });
    });
}