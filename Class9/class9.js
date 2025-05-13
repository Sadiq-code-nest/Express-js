// Send and receive form [HTML] data 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
port = 8080;

app.get('/user', (req, res) => res.sendFile(__dirname + '/File.html'));
app.post('/user', (req, res) => {
    const Name = req.body.Name;
    const Age = req.body.Age;
    res.send(` <h2>UserName: ${Name} & Age : ${Age}  </h2>`);
});
app.listen(port, () => console.log('Running successfully'));