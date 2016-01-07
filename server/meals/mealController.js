var Meal = require('./mealModel.js');
    Q = require('q');

    var findMeal = Q.denodeify(Meal.findOne, Meal);
    var createMeal = Q.denodeify(Meal.create, Meal);
    var findAllMeals = Q.denodeify(Meal.find, Meal);

  module.exports = {
    //return all meals as respond to client
    allMeals: function (req, res, next) {
      findAllMeals({})
        .then(function (meals) {
          res.json(meals);
        })
        .fail(function (error) {
          next(error);
        });
    },
    // if newMeal already in the system return the meal
    //if not, create the object in db and
    newMeal: function (req, res, next) {
      var id = req.body.id;
      findMeal({_id:id})
        .then(function (match) {
          if (match) {
            res.send(match);
          } else {
            return createMeal(newMeal);
          }
        })
        .then(function (createdMeal) {
          if (createdMeal) {
            res.json(createdMeal);
          }
        })
        .fail(function (error) {
          next(error);
        });
      },
};
