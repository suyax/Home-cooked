var express = require('express');
var mongoose = require('mongoose');
var users = require('./users/usermodel.js')

var app = express();

// connect to mongo database named "dinnerrev"
mongoose.connect('mongodb://localhost/dinnerrev');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
// var userSchema = mongoose.Schema({
// 	  username: {
//     type: String,
//     required: true,
//     unique: true
//   },

//     password: {
//     type: String,
//     required: true
//   }
// });

//var User = mongoose.model('User', users);

//===================================================
// app.get('/', function(req, res){

// });



// //====================================================
// var Boss = new users({
//   username: 'Johnny', password: '12345'
// }); 

// Boss.save(function(err, data){
// 	if (err){
// 		console.log("oh noes an error in saving to the database: ", err);
// 	} else {
// 		console.log("successfully saved: ", data);
// 	}
// });
//====================================================
app.listen(8000, function(err, success){
	if(err){
		console.log(err);
	} else {
		console.log('listening on port 8000');
	}

});

// export our app for testing and flexibility, required by index.js
module.exports = app;
