var mealdata = require('/mealdata.js');

var populateData = function(mealdata, createMeal){
  for (var i = 0; i < mealdata.length; i++) {
    createMeal(mealdata);
};

var createMeal = function(meal) {
  return new Meal({
    title: meal[title],
    picture: meal[picture],
    description: meal[description],
    date: meal[date],
    time: meal[time],
    user: meal[user]
  });
};

module.exports = populateData;
