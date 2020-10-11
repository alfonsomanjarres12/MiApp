//archivos requeridos
var express = require('express');
var morgan = require('morgan');

//instancias
const app =express();
app.use(morgan('dev'));

var UserRoutes = require('../routes/users')
app.use(UserRoutes)

//exportacion de modulos
module.exports = app