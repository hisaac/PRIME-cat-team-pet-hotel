var express = require("express");
var app = express();
var index = require('./routes/index');
var pets = require('./modules/pets');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/pets', pets);

app.use(express.static('./public/scripts'));
app.use(express.static('./public/vendor'));


app.listen(process.env.PORT || port);

app.get('/', index);
console.log("Listening on port: ", port);
