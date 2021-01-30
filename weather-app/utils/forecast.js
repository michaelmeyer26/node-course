const request = require('postman-request');

const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=' + lat + ',' + lng + '&units=f';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to connect to weather service', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, {
                'descriptions': body.current.weather_descriptions,
                'temperature': body.current.temperature,
                'feels_like': body.current.feelslike
            });
        }
    });
};

module.exports = forecast;