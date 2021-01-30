const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWljaGFlbGNtZXllcjI2IiwiYSI6ImNrZWltM2hqeTFmcjgzM3VxcGt0cGkxbnYifQ.Nd_zH244hFL7-jClbxQj8Q&limit=1';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, please check your search term and try again', error)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    });
};

module.exports = geocode