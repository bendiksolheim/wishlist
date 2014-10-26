var express = require('express');
var restful = require('node-restful');
var bodyParser = require('body-parser');
var mongoose = restful.mongoose;

var app = express();

app.use(bodyParser.json());
app.use(express.query());

mongoose.connect('mongodb://localhost/wishlist');

var wish = app.wish = restful.model('wishes', mongoose.Schema({
	name: {type: String, required: true},
	url: {type: String, required: true}
})).methods(['get', 'post', 'put', 'delete']);

wish.register(app, '/wishes');

var port = process.env.PORT || 1800;
app.listen(port, function() {
	console.log('Listening on ' + port);
});
