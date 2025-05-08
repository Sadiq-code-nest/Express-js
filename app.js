const express_js = require('express');
const app = express_js();



app.get('/', (request, response) => response.send('Its a GET request'));
app.get('/about', (request, response) => response.send('Its a GET About request'));
app.get('/contact', (request, response) => response.send('Its a GET contact request'));
app.post('/', (request, response) => response.send('Its a POST request '));
app.put('/', (request, response) => response.send('Its a PUT request'));
app.delete('/', (request, response) => response.send('Its a DELETE request'));
app.use((request, response) => response.send('404 not found'));

module.exports = app;