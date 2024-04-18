var http = require('http');

var teste = require('./execicionode');



http.createServer(function (req, res){

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('<html>')

  res.write('<body>')

  res.write('<h1>' + teste.minhaInformacao + '</h1>' );

  res.write('<p>' + teste.dbuserxpto + '</p>');

  res.write('<p>' + teste.dbpass + '</p>');

  res.write('</body>');

  res.write('</html>');

  res.end();

}).listen(3001);



exports.minhaInformacao = "Rafael";

exports.dbuserxpto = "RGM 35924543";

exports.dbpass = "senha1234";