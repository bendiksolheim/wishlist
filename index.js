var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello, World!');
	res.end(200);
});

var port = process.env.PORT || 1800;
app.listen(port, function() {
	console.log('Listening on ' + port);
});