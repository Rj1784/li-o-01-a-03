var http = require('http');

var fyleSystem = require('fs');



http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write('<html>');

  res.write('<body>');

  res.write('<h1>File System!</h1>');

  res.write('</body>');

  res.write('</html>');

  res.end();

}).listen(8082);



http.createServer(function (req, res) {

  fyleSystem.readFile('./meudado.html', function (err, data) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(data);

    return res.end()

  });

}).listen(8082);

