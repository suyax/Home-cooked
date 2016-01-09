var mealController = require('../meals/mealController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {

  //handle get and post request from client and pass them to controller
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);


  app.get('/api/meals', mealController.allMeals);
  app.post('/api/meals', mealController.newMeal);
  app.get('/api/*', mealController.allMeals);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

