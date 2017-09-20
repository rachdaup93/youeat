const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const flash        = require('connect-flash');

require('dotenv').config();

// Run all the setup code inside "passport-config.js"
// (that file doesn't export anything)
require('./config/passport-config.js');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.maintitle = 'YouEat - Plan Your Meals';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session(
  {
    secret: 'this string needs to be different for every app',
    resave: true,
    saveUninitialized: true
  }
));
// passport middlewares must come AFTER session middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
    // if we are logged in, create the "currentUser" variable for views
    if (req.user) {
        res.locals.currentUser = req.user;
    }

    // otherwise, make "currentUser" blank
    else {
        res.locals.currentUser = null;
    }

    // call "next" to move on to the next step of the middleware pipeline
    // (browser will hang forever unless you do this)
    next();
});

// ROUTES
const index = require('./routes/index-router');
app.use('/', index);

const authRouter = require('./routes/auth-router');
app.use(authRouter);

const recipeRouter = require('./routes/recipes-router');
app.use(recipeRouter);
// END OF ROUTES

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
