var mongoose = require('mongoose');

var MealSchema = new mongoose.Schema({
 title: String,
 picture: String,
 description: String,
 date: String,
 time: String
});

module.exports = mongoose.model('Meal', MealSchema);
