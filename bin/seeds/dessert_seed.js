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
   name: "Banoffee Pie",
   imagePath: "/recipes_images/dessert/banoffeepie.png",
   restrict: "Vegetarian",
   mealType: "Dessert",
   servings: 8,
   ingredients: [
     "1 cup graham cracker crumbs",
     "3 tbsp. butter, melted",
     "1 14-ounce can nonfat sweetened condensed milk",
     "pinch of salt",
     "4 medium ripe but firm bananas, sliced, divided",
     "1/2 cup heavy cream",
     "1 tsp. vanilla extract"
   ],
   procedure: [
     "To prepare crust: Preheat oven to 350&deg;F. Coat a 9-inch tart pan (with removable bottom) with cooking spray.",
     "Blend graham cracker crumbs and butter in a medium bowl with your fingers until well combined. Press the mixture into the bottom and halfway up the sides of the prepared pan. Bake until lightly browned, about 10 minutes. Cool on a wire rack.",
     "To prepare filling: Increase oven temperature to 425&deg;F. Put a kettle of water on to boil.",
     "Pour condensed milk into a glass or ceramic pie pan. Stir in salt. Tightly cover the pan with foil and place in a large roasting pan. Carefully pour 1 inch of boiling water into the roasting pan and place in the oven. Bake until the condensed milk is thickened, sticky and caramel in color, about 1 3/4 hours. Check about halfway through and add more boiling water if the level is low.",
     "Reserve 2 tbsp. of the condensed-milk toffee in a small bowl. While it's still warm, dollop the remaining toffee onto the crust (it will be sticky and a little lumpy); gently spread to cover the bottom. Cover and refrigerate the reserved toffee and the pie until chilled, about 1 hour. (If making ahead, after 1 hour loosely cover and refrigerate for up to 1 day.)",
     "Remove the pie from the refrigerator and arrange  of the sliced bananas over the toffee.",
     "Beat cream in a bowl with an electric mixer on medium speed until soft peaks form. Add vanilla; beat until stiff. Spread the whipped cream over the pie, leaving a 1-inch border around the edge. Garnish with the remaining banana. Stir 1 tsp. water into the reserved toffee until smooth and drizzle over the pie. Remove the pan sides before cutting. Serve immediately."
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
   name: "Mini Strawberry-Rhubarb Pies",
   imagePath: "/recipes_images/dessert/rhubarspie.png",
   restrict: "Vegetarian",
   mealType: "Dessert",
   servings: 12,
   ingredients: [
     "1 cup chopped almonds,divided",
     "1 1/2 cups white whole-wheat flour",
     "5/6 cup sugar",
     "1/2 tsp. salt",
     "4 tbsp. cold unsalted butter, cut into small pieces",
     "1 large egg",
     "2 tbsp. canola oil",
     "2 tsp. vanilla extract",
     "1/4 tsp. almond extract",
     "2 tablespoons instant tapioca",
     "2 cups chopped rhubarb, fresh or frozen (thawed)",
     "pinch of salt",
     "2 cups chopped strawberries, fresh or frozen (thawed)"
   ],
   procedure: [
     "To prepare crust & topping: Combine 3/4 cup almonds, flour, 1/2 cup sugar and 1/2 tsp salt in a food processor; pulse until the nuts are finely ground. Add butter; pulse until well incorporated.",
     "Whisk egg, oil, vanilla and almond extract in a small bowl. With the motor running, add the mixture to the food processor. Process, then publse, scraping down the sides if necessary, until the mixture begins to clumb, 30 to 45 seconds (it will look crumbly). Measure out 1/4 cup of the mixture and combine in a bowl with the remaining 1/4 cup almonds; set aside for the topping.",
     "Prheat oven to 400&deg;F. Generously coat a 12-cup nonstick muffin tin with cooking spray.",
     "Using clean hands, press about 1/4 cup of the crust mixture into the bottom and all the way up the side of each muffin cup. Prick the bottoms with a fork.",
     "Bake until the crusts are set and the edges are just beginning to brown, 6 to 8 minutes. Let cool on a wire rack.",
     "Reduce oven temperature to 350&deg;F.",
     "To prepare filling: Process tapioca in a spice grinder, mini food processor or blender until finely grounded."
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
   name: "Puffy Peanut Butter Chocolate Chip Cookies",
   imagePath: "/recipes_images/dessert/peanutbuttercookies.png",
   restrict: "Vegetarian",
   mealType: "Dessert",
   servings: 12,
   ingredients: [
     "2 cups all-purpose flour",
     "1/2 teaspoons baking soda",
     "8 tbsp. of salted butter, melted and cooled",
     "6 tbsp. of creamy peanut butter, melted and cooled",
     "1 cup brown sugar",
     "1/2 cup sugar",
     "1 egg + 1 egg yolk, at room temperature",
     "2 tsp. vanilla extract",
     "1 1/2 cups chocolate chips"
   ],
   procedure: [
     "Preheat oven to 325 degrees F. Add butter and peanut butter to a microwave safe bowl, and heat in 30 second increments until melted. Let cool completely.",
     "Mix the flour and baking soda in a bowl and set aside. In another bowl, mix the cooled butter/peanut butter and sugars until they are combined. Add the egg, egg yolk, and vanilla and stir until mixed. Gradually add flour and mix until a dough forms – it will look crumbly at first, but it will come together. I even used my hands to bring it all together. If necessary, add 1-2 teaspoons of milk, but I did not need this. Fold in chocolate chips.",
     "Shape the dough into a ball the size of a golfball. Place on a baking sheet two inches apart and bake for 10-12 minutes or until the edges are slightly brown. The centers should be soft and puffy. Do not over bake. Let cool completely then dig in!"
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
   name: "Peanut Butter Lava Cookies",
   imagePath: "/recipes_images/dessert/peanutbutterlavacookies.png",
   restrict: "Vegetarian",
   mealType: "Dessert",
   servings: 12,
   ingredients: [
     "1 box of Pillsbury Pie Crust",
     "Approx. 2 cups of Creamy peanut Butter",
     "1/2 cup Sugar",

   ],
   procedure: [
     "Unroll the Pie Crust, and smear one of them with an even layer of Peanut Butter.Put the other Pie Crust on top and cut out approx. 3″ cookies.",
     "Give them a little toss in some sugar, and that classic Peanut Butter Cookie fork design.Bake them on a parchment lined baking sheet at 350 for approx. 12 minutes, or until they’re slightly golden and firm.Let them cool.",
     "Toss them in sugar. Serve immediately."
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
   name: "Secret Cake",
   imagePath: "/recipes_images/dessert/secretcake.png",
   restrict: "Vegetarian",
   mealType: "Dessert",
   servings: 12,
   ingredients: [
     "1/2 cups Buttermilk",
     "1 tsp. Baking Soda",
     "2 cups Self-Rising Flour",
     "2 cups Sugar",
     "1 cup Water",
     "1/2 cups Crisco - Solid Shortening",
     "1/4 cups Cocoa Powder",
     "2 stick Butter",
     "3 Eggs",
     "2 tsp. Vanilla",
     "1/2 cups Buttermilk",
     "1/3 cups Cocoa Powder",
     "16 ounces, weight Powdered Sugar",
     "1 cup Chopped Walnuts"
   ],
   procedure: [
     "Preheat oven to 400 F. Spray a 9 x 13 pan with cooking spray.",
     "Pour 1/2 cup buttermilk into a 1 cup measuring cup, add baking soda and stir. Set aside.",
     "In a large mixing bowl sift together flour and sugar and set aside.",
     "In a medium sauce pan over medium heat combine the following: water, Crisco, 1/4 cup cocoa and 1 stick butter. Stir until combined and butter and crisco are melted. Cook until this mixture comes to a slight boil. Remove from heat and pour into the dry ingredients and mix until combined. Add buttermilk/soda mixture and scrape to get all of the mixture into the bowl. Mix at medium speed using an electric mixer and continue until well combined. Add eggs, one at a time and mix well after each addition. Add 1 teaspoon vanilla and mix well.",
     "Pour into prepared pan and bake at 400 F for 20-22 minutes.",
     "With about 5 minutes left on the baking time make the frosting: In a medium saucepan combine 1/3 cup buttermilk, 1/3 cup cocoa and 1 stick of butter over medium low heat and stir as butter melts. Once melted and combined stir constantly while cooking for about 3 minutes longer. Remove pan from heat and add powdered sugar. Mix well using an electric mixer. Once combined add 1 teaspoon vanilla and chopped nuts, mix well. Pour over the hot cake.",
     "This can also be baked in a jelly roll pan, just reduce baking time to 15 minutes. Do not substitute margarine for butter. You may also use different nuts."
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
