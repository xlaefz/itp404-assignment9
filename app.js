require('dotenv').config();
var http = require('http');
var express = require('express');
var app = express();
// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.
var consumer_token = process.env.consumer_token;
var consumer_secret = process.env.consumer_secret;
var consumer_key = process.env.consumer_key;


// var ig = require('instagram-node').instagram();
// ig.use({ access_token: consumer_token });
// ig.use({ client_id: consumer_key,
//          client_secret: consumer_secret});

app.get('/results', function(request, response){
import Instagram from 'node-instagram';
  const instagram = new Instagram({
    clientId: process.env.consumer_key,
    accessToken: process.env.consumer_token,
  });
  instagram.get('users/self').then((data) => {
    console.log("hi");
    response.json(data);
  });
  instagram.get('/users/self/media/recent').then((data) =>{
    response.json(data);
  })
})

app.listen(3000);
