angular.module('homecooked.meals', [])

.controller('MealsController', function() {
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

  var ian = new User("Ian", "Bulmer", "boss");
  var richard = new User("Richard", "Castro", "poopbootyeater69");
  var hahnbi = new User("Hahnbi", "Sun", "dumdiddlydum");
  var joan = new User("Joan", "Xie", "grandmasweater");
  var shafique = new User("Shafique", "Rashid", "dunnowhatphois");
  var suya = new User("Suya", "Xu", "suya");
  var spencer = new User("Spencer", "Gulbronson", "roofielover")

  this.meals = [
    new Meal('donuts','https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/468440_10151707673673783_908365501_o.jpg','really good donuts',ian),
    new Meal('fried chicken','http://res.cloudinary.com/dostuff-media/image/upload/v1435827981/page-image-3273-5651f2b4-b55f-4d15-a478-873c891fc9e1.jpg','popeyes',richard),
    new Meal('pho','https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg','beef and vegetables',hahnbi),
    new Meal('sushi','http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_5752_StockFood-00322258.jpg','sushirrito',shafique),
    new Meal('escargot','http://now-here-this.timeout.com/wp-content/uploads/2014/03/Escargots-de-Bourgogne.jpg','yum, snails!',spencer),
    new Meal('surf and turf','http://s7d3.scene7.com/is/image/VikingRange/SurfTurf_SurfTurf?fmt=jpeg&wid=570&hei=268','steak and seafoods',suya)
  ];
  console.log(this.meals);
});
