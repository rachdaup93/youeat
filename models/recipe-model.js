const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {type: String, required: true},
  imagePath: {type: String, required: true},
  restrict: {type: String, required: true},
  mealType: {type: String, required: true},
  servings: {type: Number},
  keywords: [{type: String}],
  ingredients: [{type: String, required: true}],
  procedure: [{type: String, required: true}],
  owner: {type: Schema.Types.ObjectId,required: true}
});

const recipeModel = mongoose.model('recipes', recipeSchema);

module.exports = recipeModel;
