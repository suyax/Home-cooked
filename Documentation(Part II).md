### Documentation(Part II)

Back-End/Server & Database

* Primary File: /server/server.js
    * Creates basic server, configure server with middleware and routes

    * Connects to MongoDB.

        ```
        var db = process.env.MONGOLAB_URI||process.env.MONGOHQ_URL ||
          'mongodb://locahost/api';
        mongoose.connect(db);
        ```
    * Populates original data into database as well


* server/users module: /server/users/

    * userModel.js:
        The user schema and methods can be found here.

        ```
        username: {
          type: String,
          required: true,
          unique: true
        },
        ```

    * userController.js:
        controls user sign-in and sign-up
        takes sign up and log in data from the client and saves it to the database

        ```
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

* server/meals module: /server/meals/

    * mealModel.js: The meal schema and methods can be found here.

        ```
        var MealSchema = new mongoose.Schema({
          title: String,
          picture: String,
          description: String,
          date: String,
          time: String,
          user: String,
        });
        ```

    * mealController.js:
        Controls the flow of data between the user interface, the server, and the database

        *Responds to client get requests for all meals, providing the data in JSON form

        ```
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

* server/config module: /server/config/

    * helpers.js: contains functions for error handling and decoding tokens

        ```
        errorHandler: function (error, req, res, next) {
          // send error message to client
          // message for graceful error handling on app
          res.send(500, {error: error.message});
        },
        ```

    * middleware.js: provides middleware for logging errors and parsing requests

        ```
        app.use(bodyParser.urlencoded({extended: true}));
        ```
    * routes.js: routes to handle every restful API request from the client side.
        ```
        app.post('/api/users/signin', userController.signin);
        ```

* server/data module: /server/data/

    * mealData.js: contains an array of meal data objects

    * userData.js: contains an array of user data objects

    * populateData.js: contains methods to populate the data into the database.

        ```
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
