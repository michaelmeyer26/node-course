const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    });
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/weather', (req, res) => {
    res.send('Weather Page');
})

//app.com
//app.com/help
//capp.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});