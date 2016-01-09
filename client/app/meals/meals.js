angular.module('homecooked.meals', [
  'homecooked.services'
])

.controller('MealsController', function ($element, stubDataFactory) {
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
  };

  this.meals = stubDataFactory.meals;

  this.makeActive = function(meal) {
    meal.isActive = true;
  };

  this.makeInactive = function(meal) {
    meal.isActive = false;
  };
});
