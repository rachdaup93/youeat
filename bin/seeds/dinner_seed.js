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
   name: "Seven-Layer Burritos",
   imagePath: "/recipes_images/dinner/refriedbeanburritos.png",
   restrict: "Vegetarian",
   mealType: "Dinner",
   servings: 4,
   ingredients: [
     "2 cans spicy vegetarian refried beans",
     "3/4 cup vegetable stock",
     "3 tsp. hot sauce, such as Frank's RedHot",
     "1 tsp. ground cumin",
     "1 small red onion, finely chopped",
     "3 jalapeno chiles, seeded and finely chopped",
     "1 lemon, juiced",
     "1 clove garlic, grated",
     "salt and pepper to taste",
     "2 ripe avocados, pitted and peeled",
     "3 plum tomatoes, seeded and chopped",
     "1/3 cup cilantro, finely chopped",
     "4 large flour tortillas",
     "3/4 lb. pepper jack, shredded",
     "1 romaine heart, chopped",
     "1 cup sour cream",
     "1 cup pimiento-stuffed green olives, chopped"
   ],
   procedure: [
     "In a medium saucepan, heat the beans, stock, hot sauce and cumin over medium-low, stirring, until warm, about 10 minutes.",
     "In a medium bowl, combine half the onion and jalapenos with the lemon juice and garlic. Season with salt; let stand 10 minutes. Mash in the avocados to make the guacamole.",
     "In a small bowl, toss the remaining onion and jalapenos with the tomatoes and cilantro to make the salsa; season with salt.",
     "Heat a large skillet over medium-high. Add one tortilla; cook until beginning to blister, about 1 minute per side. Repeat with remaining tortillas. Place one tortilla on a work surface. Spread one-quarter of the beans in a rectangle in the center, then top with one-quarter of the cheese, romaine, guacamole, salsa, sour cream and olives. roll up, burrito-style. Repeat with the remaining tortillas and fillings. Cutt burritos in half; divide among plates."
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
   name: "Chipotle Chicken Tortilla Salad",
   imagePath: "recipes_images/dinner/chipotlesalad.png",
   restrict: "Free Eater",
   mealType: "Dinner",
   servings: 4,
   ingredients: [
     "1 1/2 lbs skinless, boneless chicken thighs or breast",
     "1 tsp. ground cumin",
     "1 tsp. smoked paprika",
     "1 tsp. ground coriander",
     "salt and pepper to taste",
     "1/3 cup olive oil",
     "1 shallot, coarsely chopped",
     "1 large clove garlic, smashed",
     "2 tbsp pureed chipotle in adobo sauce",
     "2 tbsp. sherry vinegar",
     "1 tbsp. light brown sugar",
     "2 romaine hearts, coarsely chopped (7-8 cups)",
     "1 small red onion, quarted and thinly sliced",
     "1 avocado, diced",
     "1 lime, juiced",
     "2 tomatoes, diced",
     "1/2 cup chopped cilantro or fresh parsley",
     "2 cups lightly crushed tortilla chips"
   ],
   procedure: [
     "Season the chicken with the cumin, paprika, coriander, salt, and pepper. IN a large skillet, drizzle in enough oil to just cover the bottom and heat over medium-high heat. Add the chicken and cook through, 7 to 8 minutes. Transfer to a plate; reserve the skillet.",
     "In a food processor, puree the shallot, garlic, chipotle in adobo,vinegar and brown sugar. With the machine on, stream in 1/3 cup of olive oil. In the reserved skillet, simmer the sauce for 1 minute",
     "In a large bowl, place the lettuce and onion. Add the avocado and dress with the lime juice. Top with the tomatoes, cilantro (or parsley) and chips. Pour in the warm dressing and toss. To serve, top the salad with chicken."
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
   name: "Grilled cod with Blackberry Sauce",
   imagePath: "recipes_images/dinner/codblackberry.png",
   restrict: "Pescetarian",
   mealType: "Dinner",
   servings: 4,
   ingredients: [
    "1/3 cup vegetable oil",
    "1/2 cups blackberries",
    "1 tsp sherry vinegar",
    "1/8 tsp. cayenne",
    "4 cod fillets (7 oz. each)",
    "1 bunch watercress, trimmed",
   ],
   procedure: [
    "Oil grill or grill pan; preheat to medium-high.",
    "In bowl, crush berries with a fork; stir in jam, vinegar and cayenne.",
    "Season cod. Grill, covered, until fish is just cooked, about 3 minutes per side.",
    "Divide watercress among 4 plates. Place fish on watercress; top with sauce."
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
   name: "Red Chicken Marsala",
   imagePath: "recipes_images/dinner/redchicken.png",
   restrict: "Free Eater",
   mealType: "Dinner",
   servings: 4,
   ingredients: [
    "2 cups chicken stock",
    "1 tbsp of olive oil",
    "8 bone-in, skin-on chicken thighs",
    "salt and pepper to taste",
    "2 tbssp. butter",
    "3/4 lb sliced cremini or mixed mushrooms",
    "2 large shallots, chopped",
    "2-3 cloves garlic, chopped",
    "2 tbsp. fresh thyme, finely chopped",
    "1 bunch flat-leaf parsley, stems and leaves separated, each finely chopped",
    "1 tbsp. tomato paste",
    "1 can(14.5 oz.)diced tomatoes",
    "1/2 cup marsala",
    "Crusty bread, for serving"
   ],
   procedure: [
    "In a small saucepan, cook the dried mushrooms in the stock at a low, rolling boil until the mushrooms soften and the liquid reduces slightly, 10 to 15 minutes.",
    "Meanwhile, in a large, deep skillet, heat the olive oil over medium high. Season the chicken with salt and pepper and cook, turning once, until browned on both sides, 6 to 8 minutes. Transfer to a plate.",
    "Add the butter and sliced fresh mushrooms to the skillet and cook until lightly browned, then add the shallots, garlic, thyme and parsley stems and season.",
    "Stir in the tomato paste and cook 1 minute more. Add the tomatoes and the marsala and bring to a simmer. Add the porcini mushrooms and reduced stock.",
    "Return the chicken to the pan and cook through, 5 to 10 minutes. Garnish with the chopped parsley leaves; serve with the bread."
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
   name: "Lemon Cream Shrimp Scampi",
   imagePath: "recipes_images/dinner/shrimpscampi.png",
   restrict: "Pescetarian",
   mealType: "Dinner",
   servings: 4,
   ingredients: [
    "4 tbsp of olive oil",
    "1 small onion, finely chopped",
    "4 cloves garlic, finely chopped",
    "1 1/2-2 lbs. large shrimp-peeled and deveined, tails left on",
    "1 tbsp. lemon zest",
    "salt and pepper to taste",
    "1/2 cup vodka or dry vermouth",
    "1/3 cup creme fraiche or mascarpone",
    "2 tbsp. finely chopped flat-leaf parsley",
    "1/3 cup basil (a small handful), roughly torn",
    "1 lbsp. fresh lemon juice",
    "Crusty bread, for serving"
   ],
   procedure: [
    "In a large skillet, heat the olive oil, four turns of the pan, over medium-high. When the oil begins to shimmer, add the onion and garlic. Cook, stirring, until the vegetables soften, 4 to 5 minutes.",
    "Add the shrimp and lemon zest; season with salt and pepper. Toss until the shrimp is pink and opaque in the center, 2 to 3 minutes.",
    "Add the vodka; toss 1 minute. Add the creme fraiche and stir until the sauce is smooth. Off the heat, stir in the parsley and basil. Divide the shrimp among shallow bowls and drizzle with a few drops of the lemon juice.",
    "Serve with the crusty bread."
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
