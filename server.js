/*
  This script runs the server by using Express.js
  It GETS & PUTS data to & from Client.
*/

// Represents the Express.js node module.
var express = require('express');
// Represents the calling of the Express module contents.
var app = express();
// Represents the port server will run on.
var port = 3000;

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.listen(port, function(err, response) {
  if (err) {
    console.log('server error');
  } else {
    console.log('server running on port: ' + port + '.');
  }
});
