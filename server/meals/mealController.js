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

    newMeal: function (req, res, next) {
      var meal = {
        title : req.body.title,
        picture : req.body.picture,
        description : req.body.description,
        date : req.body.date,
        time : req.body.time
       };
          
        // (function(){
        //   console.log("got to the anon function");
        //   return createMeal(meal);
        // })()
        // .then(function(createdMeal){
        //   res.json(createdMeal);
        // });
        // console.log("created meal is: ",createdMeal);
        // )
        // .then(function (createdMeal) {
        //   if (createdMeal) {
        //     res.json(createdMeal);
        //   }
        // })
        // .fail(function (error) {
        //   next(error);
        // });
    /*    findMeal({title:"fake title"})
          .then(function (meal) {
            return createMeal({
              title : req.body.title,
              picture : req.body.picture,
              description : req.body.description,
              date : req.body.date,
              time : req.body.time
              });
          })
          .then(function (user) {
                  // create token to send back for aut
                  res.json(user);
                })
                .fail(function (error) {
                  next(error);
               });
              }*/


        function(){
          return createMeal({
                  title: meal.title,
                  picture: meal.picture,
                  description: meal.description,
                  date: meal.date,
                  time: meal.time
                })
        }()
        .then(function(createdMeal){
          if (createdMeal){
            res.json(createdMeal);
          }
        })
        .fail(function(error){
          next(error);
        });v 
};

