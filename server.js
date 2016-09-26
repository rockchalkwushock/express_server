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
var path = require('path');
var fs = require('fs');

/*
  This code will call for "Hello World" to be sent to the browser.
  '/' is the path in the HTML so www.google.com/whatever we want here.
  The anon. function will always pass the parameters `request` & `response`.
  `response.send()` method writes a response back to the client and
  closes the HTTP connection.
  `app.listen()` is listening for the set port.
  The anon. function is set to return either an error message or that the server
  is running and on what port it is running.
*/

// app.get('/helloworld', function(request, response) {
//     response.send("Hello World");
// });
//
// app.listen(port, function(err, response) {
//   if (err) {
//     console.log('server error');
//   } else {
//     console.log('server running on port: ' + port + '.');
//   }
// });

/*
  The following shows how to server static files to the browser via Express.
*/
// will display current directory path in Terminal
// console.log(__dirname);
// app.use('/cssFiles', express.static(__dirname + '/assets/css'));
// // http://localhost:port/cssFiles/filename.
//
// app.get('/helloworld', function(request, response) {
//     response.send("Hello World");
// });
//
// app.listen(port, function(err, response) {
//   if (err) {
//     console.log('server error');
//   } else {
//     console.log('server running on port: ' + port + '.');
//   }
// });

/*
  How to send files to the browser to be rendered.
*/

// app.use('/cssFiles', express.static(__dirname + '/assets/css'));
//
// app.get('/', function(request, response) {
//   response.sendFile('index.html', {root: path.join(__dirname)});
// });
//
// app.listen(port, function(err, response) {
//   if (err) {
//     console.log('server error');
//   } else {
//     console.log('server running on port: ' + port + '.');
//   }
// });

/*
  How to call in multipe of the same types of files without requesting the file
  explicitly.
*/

// app.use('/cssFiles', express.static(__dirname + '/assets/css'));
//
// app.get('/', function(request, response) {
//   response.sendFile('index.html', {root: path.join(__dirname)});
// });
//
// app.get(/^(.*)$/, function(request, response) {
//   console.log(request.params);
//   // log returns {'0': '/temp'}
//   // http://localhost:port/temp.
//   response.sendFile(request.params[0] + '.html', {root: path.join(__dirname)});
// });
//
// app.listen(port, function(err, response) {
//   if (err) {
//     console.log('server error');
//   } else {
//     console.log('server running on port: ' + port + '.');
//   }
// });



/*
  How to set up error catching for a file that does not exist.
*/


// app.use('/cssFiles', express.static(__dirname + '/assets/css'));
//
// app.get('/', function(request, response) {
//   response.sendFile('index.html', {root: path.join(__dirname)});
// });
//
// app.get(/^(.*)$/, function(request, response) {
//   console.log(path.join(__dirname, request.params[0], '.html'));
//   try {
//     if (fs.statSync(path.join(__dirname, request.params[0] + '.html')).isFile()) {
//       response.sendFile(request.params[0] + '.html', {root: path.join(__dirname)});
//     }
//   } catch(err) {
//     response.sendFile('404.html', {root: path.join(__dirname)});
//   }
// });
//
// app.listen(port, function(err, response) {
//   if (err) {
//     console.log('server error');
//   } else {
//     console.log('server running on port: ' + port + '.');
//   }
// });


/*
  GET
*/



app.use('/cssFiles', express.static(__dirname + '/assets/css'));

app.get('/', function(request, response) {

  // http://localhost:port/?firstName=Cody.
  // {firstName: 'Cody',}

  var resp = "Hello! " + request.query.firstName;
  response.end(resp);


  // We are sending this from the backend.
  // request.query already exists as an empty object if you have no query data.
  // response.end(JSON.stringify(request.query));
});


app.listen(port, function(err, response) {
  if (err) {
    console.log('server error');
  } else {
    console.log('server running on port: ' + port + '.');
  }
});
