//required packages and models for authenication router
const express = require('express');
const router  = express.Router();
const UserModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');

// end of packages and models

// middleware to provide stylesheet for forms
router.use((req,res,next)=>{
  res.locals.stylesheet = "/_css/form.css";
  next();
});

// renders the sign up page
router.get('/signup', (req, res, next)=>{
  res.locals.errorMessage = req.flash('errorMessage');
  res.render('auth/signup-form');
});

// process sign up form
router.post('/process-signup', (req,res,next)=>{
  // verifying required inputs of users
  if (req.body.firstName === '' ||
      req.body.lastName === '' ||
      req.body.email === '' ||
      req.body.username === '' ||
      req.body.password  === '') {
        // if any required fields are left blank, a flash message will be
        // render after the user is redirected to the signup page
        req.flash('errorMessage','The following are required to sign up:First Name, Last Name, Email, username, password')
        res.redirect('/signup');
      }

  // if the passwords don't match, a flash message will be
  // render after the user is redirected to the signup page
  if (req.body.password !== req.body.passwordMatch){
    req.flash('errorMessage','Passwords did not match.')
    res.redirect('/signup');
    return;
  }

  // checks database for existing information
  UserModel.findOne({
    $or:[
      // email and username must be unique in the database
      {email: req.body.email},
      {username: req.body.username}
    ]},
    (err, userFromDb)=>{
      if(err){
        next(err);
        return;
      }
    // if a user exists
    if(userFromDb){
      // if a username matches, a flash message will be
      // render after the user is redirected to the signup page
      if(userFromDb.username.toString() === req.body.username.toString()){
        req.flash('errorMessage','This username already exists.');
        res.redirect('/signup');
        return;
      }
      // if a email matches, a flash message will be
      // render after the user is redirected to the signup page
      else if(userFromDb.email.toString() === req.body.email.toString()){
        req.flash('errorMessage','This email is already registered.');
        res.redirect('/signup');
        return;
    }}

    // encrypt new user's password
    const salt = bcrypt.genSaltSync(10);
    const scrambledPass = bcrypt.hashSync(req.body.password, salt);

    // create new user object with sign up form values
    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      encryptedPassword: scrambledPass
    });

    // save new user
    newUser.save((err)=>{
      if(err){
        next(err);
        return;
      }
      // redirects the user to the home page if the save was successful
      res.redirect('/');
    });
  })
      });

// renders log on page
router.get('/login',  (req,res,next)=>{
  // flash message if errors occur during passport process
  res.locals.errorMessage = req.flash('errorMessage');
  res.locals.logoutFeedback = req.flash('logoutMessage');

  // flash message if errors occur during passport process
  res.locals.flashError = req.flash('error');

  res.render('auth/login');
});

//exports authenication router
module.exports = router;
