const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=2e28a3938e25d2304efdf71fdebcc9a6&query=45,-75&units=f';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        console.log(chunk);
    });

    response.on('end', () => {

    });
})

request.end()