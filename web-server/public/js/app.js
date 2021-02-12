console.log('Client side JavaScript file is loaded!');

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        }

        console.log('Location: ', data.location);
        console.log('Forecast: ', data.forecast);
    });
});