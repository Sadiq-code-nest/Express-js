const express_js = require('express');
const app = express_js();

// Reuired from Routers
const require_userRouter = require('../expressRouter/Routers/user.router');
const require_adminRouter = require('../expressRouter/Routers/admin.router');

app.use('/want/api/', require_userRouter);
app.use('/want/api/', require_adminRouter);


// Sending a JSON file
app.get('/signin', (request, response) => {
    response.status(200,)
        .json(
            {
                'name': 'Sadiq',
                'roll ': 2054901063,
                statusCode: 202
            });
    // Redirect ()
    response.redirect("/want/api/login");
});

//Sending html index file
app.get('/', (request, response) => {
    response.statusCode = 200;
    response.sendFile((__dirname + '/views/index.html'));
});

//Sending html register  file
app.get('/register', (request, response) => {
    response.statusCode = 200;
    response.sendFile((__dirname + '/views/register.html'));
});


// Cookie add and delete

app.get('/cookie', (request, response) => {
  response.cookie("name","sadiq");
  response.cookie("Age",25);

  // Cookie deleting --- 
response.clearCookie("name");

//Headers value passing
response.append("name", "Arif")
  response.end();
});


// app.get('/', (request, response) => response.send('Its a GET request'));
app.use((request, response) => response.send('404 not found'));
module.exports = app;