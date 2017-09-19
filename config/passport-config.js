const passport  = require('passport');
const UserModel = require('../models/user-model.js');

// it determines what gets saved into the session when you log in.
passport.serializeUser((userFromDb, done) => {
    // tell passport we want to save the ID inside the session
    done(null, userFromDb._id);
});

// it tells passport how to get the user's information
passport.deserializeUser((idFromBowl, done) => {
    UserModel.findById(
      idFromBowl,
      (err, userFromDb) => {
          // if there's a database error, inform passport.
          if (err) {
              done(err);
              return;
          }
        // give passport the user document from the database
        done(null, userFromDb);
      }
    );
});

// ---------------------------------------------------------------------
// STRATEGIES SETUP


const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// "passport.use()" sets up a new strategy
passport.use(
  new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },

    (emailValue, passValue, done) => {
        // find the user in the DB with that email
        UserModel.findOne(
          { email: emailValue},

          (err, userFromDb) => {
              if (err) {
                  done(err);
                  return;
              }

              // "userFromDb" will be "null" if we didn't find anything
              if (userFromDb === null) {
                  done(null, false, { message: 'Invalid email or password.blah' });
                  return;
              }
              // validates password
              const isGoodPassword = bcrypt.compareSync(passValue, userFromDb.encryptedPassword);

              if (isGoodPassword === false) {
                  done(null, false, { message: 'Invalid email or password.2' });
                  return;
              }
              console.log('test');
              // If information is correct, sends passport the user document.
              done(null, userFromDb);
          });
    }));
