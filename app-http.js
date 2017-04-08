let http = require('http');
let fs = require('fs');

/*http.createServer((request, response) => {

  if (request.url == '/') {
    let file = new fs.ReadStream(__dirname + '/public/UI/html/index.html');
    sendFile(file, response, {'Content-type': 'text/html'}) ;
  }
  else if(request.url.indexOf('.js') != -1){
    let file = new fs.ReadStream(__dirname + '/public' + request.url);
    sendFile(file, response, {'Content-type': 'text/javascript'});

  }else if(request.url.indexOf('.css') != -1){
    let file = new fs.ReadStream(__dirname + '/public' + request.url);
    sendFile(file, response, {'Content-type': 'text/css'});
  }
  else if(request.url.indexOf('.jpg') != -1 || request.url.indexOf('.png') != -1) {
    let file = new fs.ReadStream(__dirname + '/public' + request.url);
    sendFile(file, response, {'Content-type': 'text/jpeg'});
  }

}).listen(8000);

function sendFile(file, response, headers) {
  response.writeHead(200, headers);
  file.pipe(response);
}

*/

var express = require('express'),
    app = express();

  app.use(express.static('public'));

  app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/UI/html/index.html');
    });

app.listen(8000);
