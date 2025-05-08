const express_js = require('express');
const app = express_js();

const require_userRouter=require('./Routers/user.router');
const require_adminRouter=require('./Routers/admin.router');

app.use('/want/api/', require_userRouter);
app.use('/want/api/',require_adminRouter);


app.get('/', (request, response) => response.send('Its a GET request'));
app.use((request, response) => response.send('404 not found'));
module.exports = app;