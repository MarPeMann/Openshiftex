var express = require('express');

var app = express();

// variables for openshift environment
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function(req,res){
	res.sendfile('index.html');
});

app.listen(port, ip);