const express_js = require('express');
const app = express_js();

const require_userRouter = require('../expressRouter/Routers/user.router');
const require_adminRouter = require('../expressRouter/Routers/admin.router');
const { STATUS_CODES } = require('http');

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

//Sending html register file
app.use('/', (request, response) => {
    response.statusCode = 204;
    response.sendFile((__dirname + '/views/index.html'));
});

//Sending html index file
app.use('/signup', (request, response) => {
    response.statusCode = 204;
    response.sendFile((__dirname + '/views/register.html'));
});


app.use((request, response) => response.send('404 not found'));
module.exports = app;