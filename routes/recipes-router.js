//required packages and models for authenication router
const express     = require('express');
const router      = express.Router();
const RecipeModel = require('../models/recipe-model.js');
const UserModel   = require('../models/user-model.js');
const multer      = require('multer');

// end of packages and models

// multer file uploads implementation
const myUploader =  multer({
  dest: __dirname + '/../public/_images/users_images/uploads/'
});

router.use((req,res,next)=>{
  res.locals.stylesheet = "/_css/recipes.css";
  next();
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
            userFromDb[req.body.mealType[req.body.day]] = req.params.recipe_id;

            userFromDb.save((err) => {
                if (err) {
                    next(err);
                    return;
                }

                req.flash('updateSuccess', 'Meal Added.');

                res.redirect('/');
            });
        }
      );
    }
  )
});

module.exports = router;
