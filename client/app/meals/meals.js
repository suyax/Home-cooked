angular.module('homecooked.meals', [
  'homecooked.services'
])

.controller('MealsController', function (Meals) {
  // this.meals = stubDataFactory.meals;
  var me = this;

  this.makeActive = function(meal) {
    meal.isActive = true;
  };

  this.makeInactive = function(meal) {
    meal.isActive = false;
  };

  this.initialize = function() {
    this.getMeals();
  };

  this.getMeals = function() {
    return Meals.getAll().then(function (resp) {
      me.meals = resp.data;
      return resp.data;
    });
  };
})

.controller('CookController', function ($scope, $location, Meals) {
  var me = this;

  $scope.meal = {};

  $scope.submitHandler = function(meal) {
    Meals.addOne($scope.meal).then(function () {
      $location.path('/');
    });
  };

})
