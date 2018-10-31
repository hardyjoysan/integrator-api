const express = require('express');
const logger = require('morgan');
const mongoose = require('./config/db');

const app = express();

app.set('secretKey', '784A-ASRI-90IN-J570');

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));

var routes = require('./routes/route');
app.use('/api/1.0', routes);

// handle 404 error
app.use(function(req, res, next) {
    let err = new Error('Not Found');
       err.status = 404;
       next(err);
});

// handle errors
app.use(function(err, req, res, next) {
    console.log(err);
    if(err.status === 404)
      res.status(404).json({message: "404 Not found"});
    else
       res.status(500).json({message: "Something looks wrong :( !!!"});
});

module.exports = app;