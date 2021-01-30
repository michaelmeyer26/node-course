const request = require('postman-request');

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