const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
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
        title: "Help Page",
        message: "Help message?"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        "Location": "Philadeplhia",
        "Forecast": "Always Sunny"
    });
});

//app.com
//app.com/help
//capp.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});