// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('homecooked.auth', [])

.controller('AuthController', function ($scope, $location, $window) {
  $scope.user = {};




  $scope.signup = function () {
  	Auth.signup().then(function afterSignup(token){
  		$window.localStorage.setItem('home.cooked', token);
        $location.path('/meals');
  	})
  };
  $scope.signin = function () {
  	Auth.signin().then(function afterSignin(token){
  		$window.localStorage.setItem('home.cooked', token);
        $location.path('/meals');
  	})
  };
  if($location.$$path === '/logout'){
      $window.localStorage.setItem('home.cooked', '');
      $location.path('/signin');
    }
  
});
