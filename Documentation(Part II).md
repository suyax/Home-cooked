Documentation(Part II)

Back-End/Server & Database

Primary File: /server/server.js

Create basic server, configure server with middleware and routes

Connect to MongoDB.

Populate original data into database as well

```javascript
var db = process.env.MONGOLAB_URI||process.env.MONGOHQ_URL || 'mongodb://locahost/api';
// connect to mongo database named "dinnerrev"
mongoose.connect(db);
```

server/users module: /server/users/*

userModel.js: user schema and methods can be found and modified here.

```javascript
username: {
  type: String,
  required: true,
  unique: true
},
```

userController.js: control user singin and singup
handle data between database and user model

```javascript
findUser({username: username})
  .then(function (user) {
    if (user) {
      next(new Error('User already exist!'));
    } else {
      // make a new user if not one
      return createUser({
        username: username,
        password: password
      });
    }
  })
  .then(function (user) {
    // create token to send back for auth
    var token = jwt.encode(user, 'secret');
    res.json({token: token});
  })
  .fail(function (error) {
    next(error);
  });
  ```

  server/meals module: /server/meals/*

  mealModel.js: meal schema and methods can be found and modified here.

  ```javascript
  var MealSchema = new mongoose.Schema({
    title: String,
    picture: String,
    description: String,
    date: String,
    time: String,
    user: String,
  });
  ```

  mealController.js: control db to create new Meal and respond query with all meals
  handle data between database and user model

  ```javascript
  allMeals: function (req, res, next) {
    findAllMeals({})
      .then(function (meals) {
        res.json(meals);
      })
      .fail(function (error) {
        next(error);
      });
  },
  ```

  server/config module: /server/config/*

  helpers.js: contains functions for err handling and decode token

  ```javascript
  errorHandler: function (error, req, res, next) {
    // send error message to client
    // message for graceful error handling on app
    res.send(500, {error: error.message});
  },
  ```

  middleware.js: provide middlewares for log err and parse request

  ```javascript
  app.use(bodyParser.urlencoded({extended: true}));
  ```
  routes.js: routes to handle every restful API requests from client side.

  ```javascript
  app.post('/api/users/signin', userController.signin);
  ```

  server/data module: /server/data/*

  mealData.js: contains array of meal data object

  userData.js: contains array of user data object

  populateData.js: methods to populate data into database

  ```javascript
  var createUser = function(obj){
    return new User ({
      username: obj.username,
      firstName: obj.firstName,
      lastName: obj.lastName,
      password: obj.password,
      address: obj.address,
      phone: obj.phone,
      email: obj.email
    });
  };
  ```
