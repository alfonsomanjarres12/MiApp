var express = require('express');
var morgan = require('morgan');

//instancias
const app =express();
app.use(morgan('dev'));

// servidor
var port = process.env.PORT || 4000;
async function server(){
    await app.listen(port);
   console.log('servidor en el puerto', port);
}

server();

//exportacion de modulos
module.exports = app