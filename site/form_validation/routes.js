const express = require('express');
const routes = express.Router();

const Validation = require('./validation.js');

routes.post('/form', Validation.validation);

module.exports = routes;