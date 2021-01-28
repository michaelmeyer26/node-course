const request = require('postman-request');

const weatherURL = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=30.2672,-97.7431&units=f';

request({ url: weatherURL, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log('It is currently ' + response.body.current.temperature + ' degrees out and ' + response.body.current.weather_descriptions[0] + '. It feels like ' + response.body.current.feelslike + ' degrees out.');
})

const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbGNtZXllcjI2IiwiYSI6ImNrZWltM2hqeTFmcjgzM3VxcGt0cGkxbnYifQ.Nd_zH244hFL7-jClbxQj8Q&limit=1';

request({ url: geocodeURL, json: true}, (error, response) => {
    // console.log(response.body);
    console.log('lat: ' + response.body.features[0].center[0] + '\nlng: ' + response.body.features[0].center[1])
})