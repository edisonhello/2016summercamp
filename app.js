var express = require('express');

var app = express();
app.use(express.static('images'));
app.use(express.static('materialize'));

app.get('/index', function(req, res) {
	res.sendFile(__dirname+'/index.html', function() {
		res.end();
	});
});

app.get('/about', function(req, res) {
	res.sendFile(__dirname+'/about.html', function() {
		res.end();
	});
});
app.get('/pictures', function(req, res) {
	res.sendFile(__dirname+'/pictures.html', function() {
		res.end();
	});
});

app.get('/news', function(req, res) {
	res.sendFile(__dirname+'/news.html', function() {
		res.end();
	});
});
app.get('/course', function(req, res) {
	res.sendFile(__dirname+'/course.html', function() {
		res.end();
	});
});

app.get('/comments', function(req, res) {
	res.sendFile(__dirname+'/comments.html', function() {
		res.end();
	});
});

app.get('/picturecss', function(req, res) {
	res.sendFile(__dirname+'/pictures.css', function() {
		res.end();
	});
});

app.get('/registration', function(req, res) {
	res.sendFile(__dirname+'/registration.html', function() {
		res.end();
	});
});


app.get('/maincss', function(req, res) {
	res.sendFile(__dirname+'/materialize/css/materialize.css', function() {
		res.end();
	});
});

app.get('/sylecss', function(req, res) {
	res.sendFile(__dirname+'/materialize/css/style.css', function() {
		res.end();
	});
});

app.listen(3000);