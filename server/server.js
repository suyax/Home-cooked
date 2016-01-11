/*create and configure server
connect sever with mongodb*/

//require dependencies
var express = require('express');
var mongoose = require('mongoose');
var userData = require('./data/userData.js');
var mealData = require('./data/mealData.js');
var Saving = require('./data/populateData.js');

//populating test data to the database
Saving.saveUsers(userData);
Saving.saveMeals(mealData);

var app = express();
var db = process.env.MONGOLAB_URI||process.env.MONGOHQ_URL || 'mongodb://localhost/api';
// connect to mongo database named "dinnerrev"
mongoose.connect(db);


// configure server with all the middleware and routes
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//configure port for deploy and running on localhost
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
