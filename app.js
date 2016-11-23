var dotenv = require('dotenv');
dotenv.config();
var express = require('express')
var app = express()
var yelp = require('./api/yelp.js');

app.get('/results', function(request, response) {
  yelp.search({ term: 'pizza', location: 'montreal'}).then(function(results) {
    response.json(results);
  }, function(err) {
    response.json(err);
  });
});

app.listen(3000)
