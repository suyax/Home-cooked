angular.module('homecooked.meals', [])

.controller('MealsController', function ($element) {
  var User = function(first, last, username) {
    this.firstName = first;
    this.lastName = last;
    this.username = username;
  };

  var Meal = function(name, image, desc, user) {
    this.name = name;
    this.imageUrl = image;
    this.desc = desc;
    this.user = user;
  }

  this.makeActive = function(meal) {
    meal.isActive = true;
  };

  this.makeInactive = function(meal) {
    meal.isActive = false;
  };
});
