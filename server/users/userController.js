/*control user singin and singup
handle data between database and user model*/

//require dependencies
var User = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

//make findUser and createUser promise functions
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

//export module signin and signup
module.exports = {
  // sign in function to authenticate user
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('Wrong password.'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  // register user into data base
  signup: function (req, res, next) {
     var username = req.body.username;
     var firstName = req.body.firstName;
     var lastName = req.body.lastName;
     var password = req.body.password;
     var address = req.body.address;
     var phone = req.body.phone;
     var email = req.body.email;


    // check to see if user already exists
    findUser({username: username})
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          return createUser({
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone: phone,
            email: email
          });
        }
      })
      .then(function (user) {
        // create token to send back for auth
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
  }

};
