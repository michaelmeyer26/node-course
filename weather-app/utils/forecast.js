const request = require('postman-request');

// const weatherURL = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=30.2711,-97.7437&units=f';

// request({ url: weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.');
//     } else if (response.body.error) {
//         console.log(response.body.error.info);
//     } else {
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out and ' + response.body.current.weather_descriptions[0] + '. It feels like ' + response.body.current.feelslike + ' degrees out.');
//     }
// })

const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=' + lat + ',' + lng + '&units=f';

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to connect to weather service', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, {
                'descriptions': response.body.current.weather_descriptions,
                'temperature': response.body.current.temperature,
                'feels_like': response.body.current.feelslike
            });
        }
    });
};

module.exports = forecast;