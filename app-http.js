let http = require('http');
let fs = require('fs');

let express = require('express'),
    app = express();

  app.use(express.static('public'));

  app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/UI/html/index.html');
    });

app.listen(8000);
