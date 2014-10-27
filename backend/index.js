var express = require('express');
var restful = require('node-restful');
var bodyParser = require('body-parser');
var log = require('util').log;
var mongoose = restful.mongoose;

var app = express();

app.use(bodyParser.json());
app.use(express.query());

app.use(function(req, res, next) {
	log(req.method + '\t' + req.protocol +  '://' + req.get('host') + req.originalUrl);
	next();
});

mongoose.connect('mongodb://localhost/wishlist');
mongoose.connection.on('connected', function() {
	log('Connected to mongodb');
});
mongoose.connection.on('error', function(err) {
	log('Error connecting to mongodb: ', err);
});

var wish = app.wish = restful.model('wishes', mongoose.Schema({
	name: {type: String, required: true},
	url: {type: String, required: true}
})).methods(['get', 'post', 'put', 'delete']);

wish.register(app, '/wishes');

var port = process.env.PORT || 1800;
app.listen(port, function() {
	console.log('Listening on ' + port);
});
