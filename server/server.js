var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/dinnerrev');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000, function(err, success){
	if(err){
		console.log(err);
	} else {
		console.log('listening on port 8080');
	}

});

// export our app for testing and flexibility, required by index.js
module.exports = app;
