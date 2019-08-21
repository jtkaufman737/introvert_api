const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Entry = require('./api/models/entryListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Entrydb');

app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }))
app.use(bodyParser.json());

const routes = require('./api/routes/entryListRoutes');
routes(app);

app.listen(port);

console.log('Introvert api RESTful API starting');
