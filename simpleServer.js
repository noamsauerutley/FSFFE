// imports the http library
const http = require('http');

// there will always be request & response
// third param is usually 'next', which is used for creating / passing through middleware
// get request, pass through middleware, then respond.
http.createServer(function (req, res) {
  res.write('Hello, World!');
  res.end();
  // generally ports below 1000 are reserved
  // http expects port 80
  // https por 443
}).listen(8080);

console.log('Server started! Listening on port 8080');
