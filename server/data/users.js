var mongoose = require('mongoose');
var User = require('../users/userModel.js');
console.log("====================================");

var createUser = function(username, firstName, lastName, password, address, phone, email){
  return new User ({
	  username: username,
	  firstName: firstName,
	  lastName: lastName,
	  password: password,
	  address: address,
	  phone: phone,
	  email: email
  });
};

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
}

var saveUsers= function(array){
	for (var i=0; i<array.length; i++){
		var user = createUser(array[i]);
		user.save(function(err){});
	};
};

// var Ian = createUser("Boss", "Ian", "Bulmer", "123", "123fakestreet", "415-226-4398", "fake@gmail.com");
// var Suya = createUser("Penguinpower", "Suya", "XU", "passwerd", "456californiastreet", "556-765-3312", "sooyA@gmail.com");
// var Richard = createUser("GoldGlitter", "Richard", "Castro", "nuffin", "145-texasstreet", "123-455-6789", "richard@qmail.com");
// var Hahnbi  = createUser("Hannimal", "Hahnbi", "Sun", "penguinpower", "3787 Alaska way", "987-423-6642", "hannibal@Rmail.com");
// var users = [Ian, Suya, Richard, Hahnbi];

module.exports = {
  createUser: createUser,
  saveUsers: saveUsers
};

