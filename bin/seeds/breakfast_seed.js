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
  keywords: [{type: String}],
  ingredients: [{type: String}],
  procedure: [{type: String}],
//  owner: {type: Schema.Types.ObjectId,required: true}
});

const recipeModel = mongoose.model('recipes', recipeSchema);

recipeModel.create({
   name: "Chocolate + Banana Breads",
   imagePath: "breakfast/bananabread.png",
   restrict: "Vegetarian",
   mealType: "Breakfast",
   servings: 1,
   keywords: ['sample'],
   ingredients: [
     "4 baguette slices (1/2 inch thick)",
     "1 tbsp. chocolate-hazelnut spread",
     "1/4 tsp. unsweetened cocoa powder",
     "a pinch ground cayenne pepper (optional)",
   ],
   procedure: [
     "Toast baguette slices, then top with chocolate-hazelnut spread, banana slices, cocoa and cayenne, if using."
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
   name: "Hash Brown Bake with Eggs + Smoked Salmon",
   imagePath: "breakfast/hashbrownbake.png",
   restrict: "Pescetarian",
   mealType: "Breakfast",
   servings: 6,
   keywords: ['sample'],
   ingredients: [
      "8 oz. cream cheese, room temperature",
      "1/2 cup whole milk",
      "3 tbsp. butter, melted",
      "1 bag(30 oz) frozen hash browns, thawed",
      "3/4 cup thinly sliced scallions, plus more for garnish",
      "salt and pepper to taste",
      "6 eggs",
      "6 oz. thinly sliced smoked salmon",
      "2/3 cup sour cream",
      "Zest of 1 lemon"
   ],
   procedure: [
     "Position a rack in lower third of the oven; preheat to 375&deg;F. Grease a 3-qt. baking dish. In a blender, mix the cream cheese, milk and butter until smooth.",
     "In a large bowl, combine the hash browns, cream cheese mixture and 3/4 cup scallions. Season with salt and pepper. Transfer to the baking dish; smooth top. Using a ladle, make six shallow indentations in the hash browns. Bake until the edges are brown, about 45 minutes.",
     "Remove the casserole from the oven. Preheat the broiler. Crack a egg into each indentation and season. Broil until the whites are set, 3 to 4 minutes.",
     "Place a slice of salmon and a dollop of sour cream next to each egg. Garnish with the lemon zest and scallions"
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
   name: "Everything Cream Cheese BLTs on Everything Bagels",
   imagePath: "breakfast/bltbagel.png",
   restrict: "Free Eater",
   mealType: "Breakfast",
   servings: 4,
   keywords: ['sample'],
   ingredients: [
    "12 slices smoked bacon",
    "1 pkg. (8 oz.) cream cheese, softened",
    "6 thin scallions, chopped",
    "4 large radishes, grated on the large holes of a box grater",
    "1 small carrot, grated",
    "1 small rib celery, finely chopped",
    "small mild red pepper (bell pepper or frying pepper), seeded and finely chopped",
    "1 large clove garlic, grated or finely chopped",
    "4 everything bagels, split and toasted",
    "8 leaves lettuce, trimmed",
    "4 slices red onion",
    "4 slices tomato",
    "salt and pepper to taste"
   ],
   procedure: [
     "Preheat the oven to 375&deg;F. Arrange the bacon on a broiler pan; bake until crisp, 15 minutes. Let the bacon cool, then reserve 8 slices and finely chop the rest.",
     "In a medium bowl, stir together the chopped bacon, cream cheese, scallions, radishes, carrot, celery, red pepper and garlic.",
     "Slather the bagel bottoms with the cream cheese mixture. Top each with 2 slices bacon, 2 lettuce leaves and a slice each red onion and tomato. Season with salt and pepper and add bagel tops."]
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
   name: "Bell Pepper + Manchego Crustless Quiche with Greens",
   imagePath: "breakfast/quiche.png",
   restrict: "Vegetarian",
   mealType: "Breakfast",
   servings: 4,
   ingredients: [
      "6 tsp. of olive oil",
      "3 bell peppers, thinly sliced",
      "1 onion, finely chopped",
      "1 tsp. salt",
      "5 tsp. red wine vinegar",
      "1/2 cup shredded Manchego",
      "6 eggs",
      "1 cup half-and-half",
      "1 tsp. finely choppped fresh oregano",
      "5 cups baby salad greens"
   ],
   procedure: [
    "In a large nonstick skillet, heat 2 tsp. of olive oil over medium-high.",
    "Add peppers, onion and 1/4 tsp. salt",
    "Cook until peppers are tender, about 10 minutes. Stir in 1 tsp. vinegar. Spread pepper mixture in a 9-inch pie pan coated with cooking spray; sprinkle with cheese.",
    "In a medium bowl, whisk eggs, half-and-half, oregano and 3/4 tsp. salt.",
    "Pour into the pie pan. Bake at 400&deg;F until set, about 30 minutes. In a bowl, whisk remaining olive oil and vinegar; toss with greens.",
    "Serve quiche with greens."
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
   name: "Lean + Luxurious Eggs Benedict",
   imagePath: "breakfast/eggbenedict.png",
   restrict: "Free Eater",
   mealType: "Breakfast",
   servings: 4,
   ingredients: [
    "3/4 cup silken tofu",
    "2 tbsp. vegetable oil",
    "1 large clove garlic, finely chopped",
    "1 1/2 tsp. plus 1 tbsp. white balsamic vinegar",
    "1/8 tsp. ground turmeric",
    "4 eggs",
    "4 slices (1 oz. each) Canadian bacon",
    "2 whole-grain English muffins, split and toasted",
    "1 cup torn kale",
    "1/8 tsp. cayenne"
   ],
   procedure: [
    "In a food processor, mix the tofu, oil, garlic, 1 1/2 tsp. vinegar and the turmeric until smooth.",
    "Transfer to a small saucepan and cook over low heat, stirring constantly, until just heated through; season with salt and pepper. Cover to keep warm.",
    "In alarge skillet, bring 2 inches water to a simmer; add the remaining 1 tbsp. vinegar",
    "Crack 1egg into a small bowl and gently pour it into the water. Quickly repeat with the remaining eggs and cook until the whites are firm, 3 to 5 minutes. Using a slotted spoon, transfer the eggs to a paper towel to drain.",
    "Meanwhile, in a medium skillet, cook the Canadian bacon over medium-low heat, turning once, until heated through, about 3 minutes.",
    "Top each English muffin half with 1 slice Canadian bacon, 1/4 cup kale and 1 poached egg. Spoon a quarter of the sauce over each egg and sprinkle with cayenne."
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
