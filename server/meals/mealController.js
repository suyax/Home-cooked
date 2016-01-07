var Meal = require('./mealModel.js');
    Q = require('q');

    var findMeal = Q.denodify(Meal.findOne, Meal);
    var createMeal = Q.denodify(Meal.create, Meal);
    var findAllMeals = Q.denodify(Meal.find, Meal);

  module.exports = {

    allMeals: function (req, res, next) {
      findAllMeals({})
        .then(function (meals) {
          res.json(meals);
        })
        .fail(function (error) {
          next(error);
        });
    },

    newMeal: function (req, res, next) {
      var title = req.body.title;
      findMeal({title :title})
        .then(function (match) {
          if (match) {
            res.send(match);
            return createMeal(newMeal);
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
};
