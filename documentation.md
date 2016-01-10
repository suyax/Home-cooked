### Documentation

Front-End/Client Side

* Primary Index File: /client/index.html
    * Contains references to stylesheets, external libraries such as angular.

    * Contains primary navbar as well.

    * Has included ui-view, renders to ui-router in app.js:

        ```html
        <div ui-view></div>
        ```
* assets/lib/stylesheets foud in /client/ folder. This is where references to bootstrap and other external libraries are found.

### Primary app/angular module: /client/app/app.js

* angular module 'homecooked' defined here, as well as ui router routes.

*factory for authentication. Attach tokens for every request on ui routes

    ```javascript
    .factory('AttachTokens', function ($window) {
      var attach = {
        request: function (object) {
          var jwt = $window.localStorage.getItem('com.shortly');
          if (jwt) {
            object.headers['x-access-token'] = jwt;
          }
          object.headers['Allow-Control-Allow-Origin'] = '*';
          return object;
        }
      };
      return attach;
    })
    ```

* UI-router authentication runs on ever route, can be modified in this file.



### Signin/Signup pages plus authentication controller: /client/app/auth/*

* signin.html and signup.html found in this folder. Can be accessed via route or navbar.


* AuthController in auth.js has even handlers when login or signup page are submitted. Makes calls to Auth service in /client/app/services/ . Auth service returns a promise containing the response token to be set on the window object.
    ```javascript
    Auth.signup().then(function afterSignup(token){
  		$window.localStorage.setItem('home.cooked', token);
        $location.path('/meals');
  	})

    ```

### Meals page and controller: /client/app/meals/*

* Heavily formatted meals page in meals.html. Uses ng-repeat to display all meals found in database.


* Meals controller in meals.js has controller logic for meals page. Uses service to make get request from our server to populate meals from database


### Services: /client/app/services/services.js

* Auth service and meals service found in this file. This is the connection between clientside and the API presented by the server. All calls in the service file return a promise
