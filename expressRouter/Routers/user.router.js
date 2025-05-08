const express = require('express');
const Router= express.Router();


Router.post('/', (request, response) => response.send('Its a POST request and working perfectly!!!'));
Router.put('/', (request, response) => response.send('Its a PUT request'));
Router.delete('/', (request, response) => response.send('Its a DELETE request'));

module.exports=Router;