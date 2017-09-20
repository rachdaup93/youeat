const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {type: String},
  imagePath: {type: String},
  restrict: {type: String},
  mealType: {type: String},
  servings: {type: Number},
  ingredients: [{type: String}],
  procedure: [{type: String}],
  // owner: {type: Schema.Types.ObjectId,required: true}
});

const recipeModel = mongoose.model('recipes', recipeSchema);

recipeModel.create({
   name: "Chicken-Chorizo Tacos",
   imagePath: "/recipes_imageslunch/chickentacos.png",
   restrict: "Free Eater",
   mealType: "Lunch",
   servings: 4,
   ingredients: [
     "1/4 cup canola oil",
     "3/4 lb. boneless, skinless chicken breasts",
     "6 oz. fresh chorizo, cassing removed",
     "1 cup shredded pepper jack cheese",
     "4 medium (7-inch) flour tortillas",
     "4 cloves garlic",
     "1/2 cup cilantro",
     "2 avocados, pitted",
     "1/3 cup fresh lime juice",
     "1 tbsp. lime zest"
   ],
   procedure: [
    "In large skillet, heat 1 tbsp. oil over medium-high. Season chicken; add to pan and cook, turning, about 8 minutes. Transfer to plate; shred meat",
    "Add chorizo to skillet; cook until browned and crumbled. Stir in chicken. Divide meat and cheese among tortillas; fold in half.",
    "Cook tacos in remaining 3 tbsp. oil over medium until golden, 3 minutes per side.",
    "In food processor, chop garlic and cilantro, then blend in avocados, lime juice, lime zest and 1 tbsp. water. Season and serve with tacos."
   ]
 },
 (err, savedRecipe)=>{
   if(err){
     console.log('There was an error.');
     console.log(err);
     return;
   }
   console.log("New Recipe has been saved:"+ savedRecipe.name +".");
 });


recipeModel.create({
   name: "Brown Macaroni with Four Cheeses + Cauliflower",
   imagePath: "/lunch/maccheesecauliflower.png",
   restrict: "Vegetarian",
   mealType: "Lunch",
   servings: 6,
   ingredients: [
    "salt and pepper to taste",
    "1 lb. whole-grain or farro penne rigate",
    "1 head cauliflower or Romanesco (Roman broccoli), cut into bite-size florets",
    "2 tbsp. of olive oil",
    "5 tbsp. butter",
    "10 large shallots, thinly sliced",
    "3-4 cloves garlic, thinly sliced or chopped",
    "2 tbsp. finely chopped fresh thyme",
    "2 tbsp. finely chopped fresh rosemary",
    "1 cup chicken or vegetable stock",
    "3 tbsp. flour",
    "Freshly grated or ground nutmeg",
    "1 tsp. dry mustard or 1/2 tsp. cayenne",
    "2 1/2 cups mixed grated cheese: sharp white cheddar, Asiago and Fontina Val d'Aosta(or Gruyere)",
    "1/2 cup grated parmigiano-reggiano cheese"
   ],
   procedure: [
    "Bring a large pot of water to a boil. Salt the water and cook the penne until al dente, about 8 minutes, adding the cauliflower during the last 4 minutes of cooking. Drain and return pasta and cauliflower to the pot.",
    "Meanwhile, in a medium skillet over medium-low, heat the olive oil, two turns of the pan. Add 1 tbsp. of the butter. Once it foams, add the shallots and garlic. Season with salt, pepper, the thyme and rosemary. Cook, stirring occassionally, until shallots are light golden, about 20 minutes. Stir in 1/2 cup of the stock.",
    "Preheat the broiler. In a medium saucepan, melt the reamining 4 tbsp. butter over medium heat. Whisk in the flour, nutmeg and dry mustard and cook for 1 minute. Whisk in the milk and the remaining 1/2 cup stock, then stir in the cheese using a figure-8 motion. Cook over medium-high heat until thick enough to coat the spoon, 2 to 3 minutes. Remove from the heat.",
    "Add the shallot mixture and sauce to the pasta pot. Stir to combine. Transfer to a 9-by-13-inch baking dish; top with the parmigiano-reggiano. Broil until browned and bubbling, 1 to 2 minutes. Let sit for 10 minutes before serving."
   ]
 },
 (err, savedRecipe)=>{
   if(err){
     console.log('There was an error.');
     console.log(err);
     return;
   }
   console.log("New Recipe has been saved:"+ savedRecipe.name +".");
 });


recipeModel.create({
   name: "Radish, Orange, and Arugula Salad with Cumin Vinaigrette",
   imagePath: "recipes_images/lunch/orangesalad.png",
   restrict: "Vegetarian",
   mealType: "Lunch",
   servings: 4,
   ingredients: [
    "1/2 small red onion, thinly sliced",
    "5 clementines, divided",
    "2 tbsp. lemon juice",
    "1 tsp. ground cumin",
    "2 cups baby arugula",
    "2 Belgian endive, thinly sliced (2 cup)",
    "1 1/2 cups sliced radishes",
    "1/4 cup roasted, salted sunflower seeds",
    "1/4 cup crubled blue cheese",
    "1/4 cup thinly sliced fresh mint leaves"
   ],
   procedure: [
    "Place onion slices in bowl, and cover with cold water. Set aside.",
    "Juice 1 clementine into bowl. Whisk in lemon juice, oil, and cumin, and season with salt and pepper, if desired. Set aside.",
    "Peel remaining4 clementines, and pull apart into halves. Slice each half into half-circles. Set aside.",
    "Drain onion slices, and toss with arugula, endive, and randishes in salad bowl. Add clementines and dressing, and toss. Sprinkle with sunflower seeds, blue cheese, and mint leaves."
   ]
 },
 (err, savedRecipe)=>{
   if(err){
     console.log('There was an error.');
     console.log(err);
     return;
   }
   console.log("New Recipe has been saved:"+ savedRecipe.name +".");
 });


recipeModel.create({
   name: "Tilapia Po'Boy",
   imagePath: "/recipes_images/lunch/tilapiapoboy.png",
   restrict: "Pescetarian",
   mealType: "Lunch",
   servings: 4,
   ingredients: [
    "2 large tilapia fillets (6-7 ounces each)",
    "2 tsp. Cajun spice blend (without added salt)",
    "1/2 tsp. salt",
    "1 large egg white",
    "2 tbsp. water",
    "1/2 cup fine cornmeal",
    "2 tbsp. canola oil, divided",
    "5 tbsp. low-fat mayonnaise",
    "3 tbsp. finely chopped dill pickle",
    "4 small whole-wheat hoagie buns (2-3 ounces each), toasted",
    "2 ripe plum tomatoes, sliced",
    "1/2 cup thinly sliced red onion",
    "2 cups very thinly sliced romaine"
   ],
   procedure: [
    "Sprinkle fish with Cajun spice and salt, then cut each fillet in half lengthwise. Whisk egg white and water in a shallow dish. Place cornmeal in another shallow dish. Dip th efish in the egg mixture, then in the cornmeal. (Discard any leftover egg and cornmeal.)",
    "Heat 1 tbsp. oil in a large nonstick skillet over medium-high heat. Add the fish (it will be a tight fit) and cook until golden brown on the bottom, 3 to 5 minutes.",
    "Turn over, swirl in theremaining 1 tbsp. oil and cook until the fish is golden brown on the other side and opaque in the middle, 3 to 5 minutes more.",
    "Combine mayonnaise and pickle in a small bowl. To assemble the sandwiches, spread 1 generous tbsp. of the mixture on each bun. Top with a piece of fish, tomato, onion and lettuce"
   ]
 },
 (err, savedRecipe)=>{
   if(err){
     console.log('There was an error.');
     console.log(err);
     return;
   }
   console.log("New Recipe has been saved:"+ savedRecipe.name +".");
 });


recipeModel.create({
   name: "Tilapia + Sweet Potato Chips",
   imagePath: "/recipes_images/breakfast/eggbenedict.png",
   restrict: "Pescetarian",
   mealType: "Lunch",
   servings: 4,
   ingredients: [
    "1 1/2 lbs sweet pototoes, cut lengthwise into thin wedges",
    "1 1/2 tbsp. canola oil",
    "2 tsp. sweet smoked paprika",
    "2 egg whites",
    "1 cup panko",
    "3 tbsp. minced flat-leaf parsley",
    "4 tilapia fillets (4 oz. each), cut lengthwise in half",
    "1/2 cup mayonnaise",
    "17 bread-and-butter pickle slices-5 minced and 1 tsp. pickle juice",
    "1 tbsp. capers, minced",
    "1 small lemon, quartered"
   ],
   procedure: [
    "Position racks in the upper and lower thirds of the oven and preheat to 475&deg;F. In a large bowl, toss the sweet potatoes, oil and paprika; season with salt and pepper. Roast the sweet potatoes on a large baking sheet on the upper rack, turning once, until nicely browned and tender, 16 to 18 minutes.",
    "Meanwhile, in a wide, shallow bowl, lightly beat the egg whites. ON a plate, mix the panko with 2 tbsp. parsley; season. Working with one fillet at a time, season the fish, dip it in the egg whites, then coat the fillet with panko, pressing to adhere. Transfer the fillets to a baking sheet and bake on the lower rack, turning once, until browned on the outside and opaque in the center, 12 to 14 minutes.",
    "In a small bowl, combine the mayo, minced pickle slices, 1 tbsp. pickle juice, capers and the remaining 1 tbsp. parsley. Serve the fish and chips with the sauce, the 12 remaining pickle slices and the lemon wedges."
   ]
 },
 (err, savedRecipe)=>{
   if(err){
     console.log('There was an error.');
     console.log(err);
     return;
   }
   console.log("New Recipe has been saved:"+ savedRecipe.name +".");
 });
