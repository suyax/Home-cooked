// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('homecooked.auth', [])

.controller('AuthController', function ($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.validUser = true;
  $scope.tries = 6;
  $scope.lockedOut = true;
  $scope.alreadyExists = false;

  $scope.signup = function () {
  	Auth.signup($scope.user).then(function afterSignup(token){
  		$scope.alreadyExists = false;
  		$window.localStorage.setItem('home.cooked', token);
      $window.localStorage.setItem('home.cooked.user', $scope.user.username);
      $location.path('/meals');
  	})
  	.catch(function yolo(err){
  		$scope.alreadyExists = true;
  	})
  };
  $scope.signin = function () {
  	Auth.signin($scope.user).then(function afterSignin(token){
  		$window.localStorage.setItem('home.cooked', token);
      $window.localStorage.setItem('home.cooked.user', $scope.user.username);
      $location.path('/meals');
  	}).catch(function(err){
  		$scope.validUser = false;
  		$scope.tries += -1;
  		if($scope.tries === 0){
  		  $scope.lockedOut = false;
  		}

  	});
  };
  if ($location.$$path === '/logout'){
    Auth.signout();
  }
});
