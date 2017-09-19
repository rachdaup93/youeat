const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {type: String},
  imagePath: {type: String},
  restrict: {type: String},
  mealType: {type: String},
  servings: {type: Number},
  keywords: [{type: String}],
  ingredients: [{type: String}],
  procedure: [{type: String}]
});

const recipeModel = mongoose.model('recipes', recipeSchema);

module.exports = recipeModel;
