var express = require('express');
var mongoose = require('mongoose');
var User = require('./users/userModel.js');
var Data = require('./data/userData.js');
var Saving = require('./data/users.js');
console.log("========================");

//populating test data to the database
Saving.saveUsers(Data);


var app = express();

// connect to mongo database named "dinnerrev"
mongoose.connect('mongodb://localhost/dinnerrev');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var User = mongoose.model('User', users);

var port = process.env.PORT || 8000;
app.listen(port, function(err, success){
	if(err){
		console.log(err);
	} else {
		console.log('listening on port' + port);
	}

});





// export our app for testing and flexibility, required by index.js
module.exports = app;
