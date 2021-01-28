const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=30.2672,-97.7431&units=f';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log('It is currently ' + response.body.current.temperature + ' degrees out and ' + response.body.current.weather_descriptions[0] + '. It feels like ' + response.body.current.feelslike + ' degrees out.');
})