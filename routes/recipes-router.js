//required packages and models for authenication router
const express     = require('express');
const router      = express.Router();
const RecipeModel = require('../models/recipe-model.js');
const UserModel   = require('../models/user-model.js');
const multer      = require('multer');

// end of packages and models

// multer file uploads implementation
const myUploader =  multer({
  dest: __dirname + '/../public/_images/recipes_images/uploads/'
})

router.use((req,res,next)=>{
  res.locals.stylesheet = "/_css/recipes.css";
  next();
});

router.post('/sample',(req,res,next)=>{
  let query;
  if(req.body.mealType === 'Dessert'){
    query = {};
  }
  else{
    query = {"restrict": req.body.restrict};
  }
  RecipeModel.find({
    $and:[
        query,
        {"mealType": req.body.mealType},
        {"keywords": "sample"}
      ]
    },
    (err, recipeFromDb)=>{
      if(err){
        next(err);
        return;
      }
      if(Array.isArray(recipeFromDb)){
        res.locals.recipe = recipeFromDb[0];
      }
      else{
        res.locals.recipe = recipeFromDb;
      }
      res.render('recipes/recipe-details');
    });
});

router.get('/sample-recipes/category/:recipe_meal',(req,res,next)=>{
  let query;
  if(req.params.recipe_meal === 'Vegetarian'){
    query = {restrict: "Vegetarian"};
  }
  else if(req.params.recipe_meal === 'Pescetarian'){
    query = {$or:[{restrict: "Vegetarian"},{restrict: "Pescetarian"}]};
  }
  else{
    query = {};
  }
  RecipeModel.find({
    $and:[
        query,
        {"keywords": "sample"}
      ]
    },
    (err, recipesFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.recipesList = recipesFromDb;
      res.render('recipes/recipes');
    }
  );
});

router.get('/sample-details/:recipe_id',(req,res,next)=>{
  RecipeModel.findById(
    req.params.recipe_id,
    (err,recipeFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.recipe = recipeFromDb;
      res.render('recipes/recipe-details');
    }
  );
});

router.get('/recipes',(req,res,next)=>{
  let query;
  if(!req.user){
    req.flash('errorMessage', "You need an account to access all recipes.");
    res.redirect('/login');
    return;
  }
  if(req.user.diet === 'Vegetarian'){
    query = {restrict: "Vegetarian"};
  }
  else if(req.user.diet === 'Pescetarian'){
    query = {$or:[{restrict: "Vegetarian"},{restrict: "Pescetarian"}]};
  }
  else{
    query = {};
  }
  RecipeModel.find(
      query,
    (err, recipesFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.recipesList = recipesFromDb;
      res.render('recipes/recipes');
    }
  );
});

router.get('/recipes-details/:recipe_id', (req,res,next)=>{
  if(!req.user){
    req.flash('errorMessage', "You need an account to access this recipe's details.");
    res.redirect('/login');
    return;
  }
  RecipeModel.findById(
    req.params.recipe_id,
    (err,recipeFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.recipe = recipeFromDb;
      res.render('recipes/recipe-details');
    }
  );
});

router.post('/schedule-meal/:recipe_id',(req,res,next)=>{
  if(!req.user){
    req.flash('errorMessage', "You need an account to access this page.");
    res.redirect('/login');
    return;
  }
  RecipeModel.findById(
    req.params.recipe_id,
    (err, recipeFromDb)=>{
      if(err){
        next(err);
        return;
      }
      if(!recipeFromDb){
        res.redirect('recipes/recipes');
        return;
      }
      UserModel.findById(
        req.user._id,

        (err, userFromDb) => {
            if (err) {
                next(err);
                return;
            }
            const meal = userFromDb[req.body.mealType];
            meal[req.body.day] = req.params.recipe_id;
            userFromDb[req.body.mealType] = meal;

            userFromDb.save((err) => {
                if (err) {
                    next(err);
                    return;
                }

                req.flash('successMessage', 'Meal Added.');
                res.redirect('/');
            });
        }
      );
    })});

router.use('/recipe-new', (req,res,next)=>{
  if(!req.user){
    req.flash('errorMessage', 'Log in to create recipes.');
    res.redirect('/login');
    return;
  }
  res.locals.script = "form.js";
  res.locals.errorMessage = req.flash('errorMessage');
  res.locals.stylesheet = "/_css/form.css";
  res.render('recipes/recipe-form');
});

router.use('/recipes/category/:recipe_meal',(req,res,next)=>{
  let query;
  if(!req.user){
    req.flash('errorMessage', "You need an account to access all recipes.");
    res.redirect('/login');
    return;
  }
  if(req.user.diet === 'Vegetarian'){
    query = {restrict: "Vegetarian"};
  }
  else if(req.user.diet === 'Pescetarian'){
    query = {$or:[{restrict: "Vegetarian"},{restrict: "Pescetarian"}]};
  }
  else{
    query = {};
  }
  RecipeModel.find({
    $and:[
        query,
        {"mealType": req.params.recipe_meal}
      ]
    },
    (err, recipesFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.recipesList = recipesFromDb;
      res.render('recipes/recipes');
    }
  );
});

router.post('/process-recipe', myUploader.single('imagePath'), (req,res,next)=>{
  // verifying required inputs of recipe
  if (req.body.name      === '' ||
      req.body.restrict  === '' ||
      req.body.mealType  === '' ||
      req.body.ingred[0] === '' ||
      req.body.direct[0] === '' ||
      !req.file) {
        // if any required fields are left blank, a flash message will be
        // render after the user is redirected to the signup page
        req.flash('errorMessage','Required: name, a picture, diet restriction, meal type, ingredients, directions')
        res.redirect('/recipe-new');
        return;
      }
      const newRecipe = new RecipeModel({
        name: req.body.name,
        imagePath: '/uploads/' + req.file.filename,
        restrict: req.body.restrict,
        mealType: req.body.mealType,
        servings: req.body.servings,
        keywords: req.body.keywords.split(','),
        ingredients: req.body.ingred,
        procedure: req.body.direct,
        owner: req.user._id
      });

      // save new Recipe
      newRecipe.save((err)=>{
        if(err){
          next(err);
          return;
        }
        // redirects the user to the home page if the save was successful
        req.flash('successMessage', 'New Recipe Added.');
        res.redirect('/my-recipes');
      });
});

router.get('/my-recipes', (req, res, next)=>{
  if(!req.user){
    req.flash('errorMessage', 'Log in to view your recipes.');
    res.redirect('/login');
    return;
  }
  RecipeModel.find(
    {owner: req.user._id},
    (err, myRecipes)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.myRecipes = myRecipes;
      res.locals.successFeedback = req.flash('successMessage');
      res.render('recipes/my-recipes');
    });
});

router.post('/recipe-delete/:recipe_id',(req, res, next)=>{
  RecipeModel.findById(
    req.params.recipe_id,
    (err, recipeInfo)=>{
      if(err){
        next(err);
        return;
      }
      if(req.user._id.toString() !== recipeInfo.owner.toString()){
        req.flash('errorMessage','You cannot delete this recipe.')
        res.redirect('/recipes-details/' + req.params.recipe_id);
        return;
      }
      RecipeModel.findByIdAndRemove(
        req.params.recipe_id,
        (err, recipeInfo)=>{
          if(err){
            next(err);
            return;
          }
          req.flash('successMessage', recipeInfo.name +' has been deleted.');
          res.redirect('/my-recipes');
        });
    });
});

module.exports = router;
