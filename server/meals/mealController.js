var Meal = require('./mealModel.js');
Q = require('q');

var findMeal = Q.nbind(Meal.findOne, Meal);
var createMeal = Q.nbind(Meal.create, Meal);
var findAllMeals = Q.nbind(Meal.find, Meal);

  module.exports = {

    //returns all meals in our database as the response

    allMeals: function (req, res, next) {
      findAllMeals({})
        .then(function (meals) {
          res.json(meals);
        })
        .fail(function (error) {
          next(error);
        });
    },

    //returns the meal as the response to the client
    newMeal: function (req, res, next) {
      var meal = {
        title : req.body.title,
        picture : req.body.picture,
        description : req.body.description,
        date : req.body.date,
        time : req.body.time,
        user : req.body.user
      };
      var makeMeal = function (meal) {
        return createMeal(meal);
      };
      makeMeal(meal)
      .then(function(createdMeal){
        if (createdMeal){
          res.json(createdMeal);
        }
      })
      .fail(function(error){
        next(error);
      });
  }

};

