const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const opn = require('opn');
// server
var app = express();
var args = process.argv.slice(2);
// routes
var eventRoute = require('./routes/event_route');

//db connection
var mongoDB = 'mongodb://localhost:27017/events'
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get mongo instance
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


app.use(bodyParser.json());
// serve static view folder here
app.use(express.static('static'));
//logging
app.use(morgan('combined'));

// index route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

// event route
app.get('/events', eventRoute.getAllEvents);

app.get('/events/:start/:end/:type', eventRoute.getEventsByDateAndType);

app.listen(3000, function () {
  console.log("Express server started !");
  opn('http://localhost:3000');
});


module.exports = app;
