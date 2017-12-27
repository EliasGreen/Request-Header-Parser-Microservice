// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
let os = require('os');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/whoami", function (req, res) {
 let ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
  
 let lang = req.headers["accept-language"].split(",")[0];

let system = os.platform();

  res.json({"ipaddress":" " + ip,"language":" " + lang,"software":" " + system});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
