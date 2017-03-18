var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
// var controller = require('./controller');

var connectionString = "postgres://gagnier@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString})
var app = module.exports = express();

app.set('db', massiveInstance);
var db = app.get('db');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.listen('8686', function(){
  console.log("Successfully listening on : 8686")
})
