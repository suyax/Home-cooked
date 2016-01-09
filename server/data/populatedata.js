
var mongoose = require('mongoose');
var User = require('../users/userModel.js');
var Meal = require('../meals/mealModel.js');

var createUser = function(obj){
  return new User ({
	  username: obj.username,
	  firstName: obj.firstName,
	  lastName: obj.lastName,
	  password: obj.password,
	  address: obj.address,
	  phone: obj.phone,
	  email: obj.email
  });
};

var saveUsers= function(array){
	for (var i = 0; i < array.length; i++){
		var user = createUser(array[i]);
		user.save(function(err){});
	};
};


var createMeal = function(meal) {
  return new Meal({
    title: meal.title,
    picture: meal.picture,
    description: meal.description,
    date: meal.date,
    time: meal.time,
    username: meal.username
  });
};

var saveMeals = function(mealdata){
  for (var i = 0; i < mealdata.length; i++) {
    var meal = createMeal(mealdata[i]);
    meal.save(function(err){});
  };
};

module.exports = {
  createUser: createUser,
  saveUsers: saveUsers,
  createMeal: createMeal,
  saveMeals: saveMeals
};
