const express = require('express');
const app = express();
port = 3000;

// Requiring body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Triangle calculate
app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/Triangle.html');
});

app.post('/area', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    let Area = base * height;
    res.send(`<h2> The Area of Triangle is ${Area} </h2>`);
});




app.get('/', (req, res) => res.sendFile(__dirname + '/Home.html'));
app.get('/circle', (req, res) => res.sendFile(__dirname + '/Circle.html'));
// app.get('/circle', (req, res) => res.sendFile(__dirname + '/Triangle.html'));

app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    let circleCalculator = radius * 3.1416;
    res.send(`<h2> The Circle area is : ${circleCalculator} </h2>`)
});

app.listen(port, () => console.log('Server working!!'));
