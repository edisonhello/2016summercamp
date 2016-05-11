var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('images'));
app.use(express.static('materialize'));
app.use('/dist',express.static(__dirname+'/dist'));

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html', function() {
		res.end();
	});
});

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
app.get('/registration2', function(req, res) {
	res.sendFile(__dirname+'/registration2.html', function() {
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

io.on("connection",function(socket){
    //
})


server.listen(5555);
