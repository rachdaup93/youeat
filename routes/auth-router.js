//required packages and models for authenication router
const express   = require('express');
const router    = express.Router();
const UserModel = require('../models/user-model.js');
const passport  = require('passport');
const bcrypt    = require('bcrypt');
const multer    = require('multer');

// end of packages and models

// multer file uploads implementation
const myUploader =  multer({
  dest: __dirname + '/../public/_images/users_images/uploads/'
});

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
        req.flash('errorMessage','Required: first name, last name, email, username, password')
        res.redirect('/signup');
        return;
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
  // redirect to home if you are already logged in
  if (req.user) {
      res.redirect('/');
      return;
  }

  // flash message if errors occur during passport process
  res.locals.errorMessage = req.flash('errorMessage');
  res.locals.logoutFeedback = req.flash('logoutMessage');

  // flash message if errors occur during passport process
  res.locals.flashError = req.flash('error');

  res.render('auth/login');
});

router.post('/process-login',
 // name of strategy   settings object
  passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
  })
);


router.get('/logout', (req, res, next) => {
    // special passport method for clearing the session
    // (emptying the bowl)
    req.logout();

    // set a flash message for feedback after the redirect
    req.flash('logoutSuccess', 'Log out successful.');

    res.redirect('/login');
});

router.get('/profile-edit', (req,res,next)=>{
  if(!req.user){
    req.flash('errorMessage', 'Log in to edit your profile.');
    res.redirect('/login');
    return;
  }
  res.locals.script = "form.js";
  res.locals.errorMessage = req.flash('errorMessage');
  res.render('auth/profile-edit');
})

router.post('/process-profile', myUploader.single('image'),(req, res, next) => {
    // redirect to the log in page if NOT logged in
    if (!req.user) {
        req.flash('errorMessage', 'Log in to edit your profile.');
        res.redirect('/login');
        return;
    }

    UserModel.findById(
      req.user._id,

      (err, userFromDb) => {
          if (err) {
              next(err);
              return;
          }
          userFromDb.firstName = req.body.firstName;
          userFromDb.lastName = req.body.lastName;
          userFromDb.diet = req.body.diet;
          if(req.file){
          userFromDb.profile.image = '/uploads/' + req.file.filename;
        }
          userFromDb.profile.summary = req.body.summary;
          userFromDb.profile.hobbies = req.body.hobbies;

          userFromDb.save((err) => {
              if (err) {
                  next(err);
                  return;
              }

              req.flash('updateSuccess', 'Profile update successful.');

              res.redirect('/');
          });
      }
    );
});

//exports authenication router
module.exports = router;
