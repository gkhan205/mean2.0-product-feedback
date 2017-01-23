// Get dependencies
var express = require('express');
var path = require('path');
var http = require('http');
var session = require('express-session');
var cookie = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongojs = require('mongojs');

var app = express();

// mongoose.connect('mongodb://localhost/feedback-app', function(err, conn){
// 	if(err){
// 		console.log('DB Not Connected');
// 	} else{
// 		console.log('DB Connected');
// 	}
// });

mongoose.connect('mongodb://feed:feedadmin@ds011963.mlab.com:11963/feedback-app', function(err, conn){
	if(err){
		console.log('DB Not Connected ' +err);
	} else{
		console.log('DB Connected');
	}
});



var feeds = require('./server/models/feeds');
var users = require('./server/models/user');

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookie());


// Get our API routes
var api = require('./server/routes/api');
var users = require('./server/routes/user');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Express Sessions
app.use(session({
	secret: 'secret',
	saveUnintialized: true,
	resave: true
}));

// Set our api routes
app.use('/api', api);
app.use('/users', users);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));