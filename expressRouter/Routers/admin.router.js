const express = require('express');
const Router= express.Router();

Router.get('/about', (request, response) => response.send('Its a GET About request'));
Router.get('/contact', (request, response) => response.send('Its a GET contact request'));
Router.get('/login', (request, response) => response.send('Its a GET login request'));

module.exports=Router;