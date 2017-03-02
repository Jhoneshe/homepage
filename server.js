var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8888, function(){
	console.log("server is listening 8888");
})
