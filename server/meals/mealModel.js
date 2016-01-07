var mongoose = require('mongoose');
//mongo will automaticlly generate an unique _id for each entry
var MealSchema = new mongoose.Schema({
 title: String,
 picture: String,
 description: String,
 date: String,
 time: String
});

module.exports = mongoose.model('Meal', MealSchema);
