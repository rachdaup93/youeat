const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  //logged in users
    if (req.user) {
      res.locals.stylesheet = "/_css/user-home.css";
      res.render('user-home.ejs');
    }

  // anonymous users
    else {
        // check for feedback messages from the sign up process
        res.locals.stylesheet = "/_css/index.css";
        res.locals.signupFeedback = req.flash('signupSuccess');
        res.render('index');
    }
});

module.exports = router;
