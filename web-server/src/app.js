const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

// Define Paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Michael Meyer"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Michael Meyer"
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Michael Meyer",
        helpMessage: "Help message"
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address.'
        })
    }

    res.send({
        "location": "Philadelphia",
        "forecast": "Sunny",
        "address": req.query.address
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term.'
        })
    }

    console.log(req.query);
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "Help",
        name: "Michael Meyer",
        errorMessage: "Help article not found!"
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: "Help",
        name: "Michael Meyer",
        errorMessage: "Uh oh! Page not found!"
    })
});

//app.com
//app.com/help
//capp.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});