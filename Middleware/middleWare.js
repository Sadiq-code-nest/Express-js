const express = require('express');
const app = express();
const port = 3000;

// Initialize MiddleWare
const myMiddleWare = (req, res, next) => {

    req.currentTime = new Date(Date.now());
    console.log('middleware working');
    next();
}

// Use middleWare for multiple method
app.use(myMiddleWare);

app.get('/', /* myMiddleWare, */(req, res) => {
    console.log('home ' + req.currentTime);
    res.send('end')
});
app.get('/about', /* myMiddleWare, */(req, res) => {
    console.log('about ' + req.currentTime);
    res.send('about end')
});

app.listen(port, () => console.log('welcome '));