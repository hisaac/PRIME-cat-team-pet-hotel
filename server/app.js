var express = require("express");
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/result', function(req, res) {
//   res.send();
// });

app.use(express.static('./public/scripts'));

app.listen(process.env.PORT || port);
app.get('/', index);
console.log("Listening on port: ", port);
