const request = require('postman-request');

const weatherURL = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=&units=f';

request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.');
    } else if (response.body.error) {
        console.log(response.body.error.info);
    } else {
        console.log('It is currently ' + response.body.current.temperature + ' degrees out and ' + response.body.current.weather_descriptions[0] + '. It feels like ' + response.body.current.feelslike + ' degrees out.');
    }
})

// const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbGNtZXllcjI2IiwiYSI6ImNrZWltM2hqeTFmcjgzM3VxcGt0cGkxbnYifQ.Nd_zH244hFL7-jClbxQj8Q&limit=1';

// request({ url: geocodeURL, json: true}, (error, response) => {
//     // console.log(response.body);
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log('lat: ' + latitude + '\nlng: ' + longitude)
// })