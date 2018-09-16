var express = require('express');
var router = express.Router();

var loggedin = function (req,res,next) {
  if(req.isAuthenticated()) {
    next()
  }
  else {
    res.redirect('/login')
  }
}


/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page',
                        owner: 'Joseph Aaron Diable'         
})
});


/* Get Gallery Page. */
router.get('/photo_gallery', function(req, res, next) {
  res.render('photo_gallery', { title: 'Photo Gallery',
                                owner: 'Joseph Aaron Diable'         
})
});


/* Get About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
                        owner: 'Joseph Aaron Diable'         
})
});


/* Get Sign up Page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up',
                        owner: 'Joseph Aaron Diable'         
})
});


router.get('/logout', function (req,res, next) {
  req.logout()
  res.render('index', { title: 'Home Page',
                        owner: 'Joseph Aaron Diable'         
})
});


/* Get Profile Page after login. */
router.get('/profile', loggedin, function(req, res, next) {
  res.render('profile', { title: 'Photo Gallery',
                                username: req.user.username
})         
});


/* Get Login Page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login in',
                        owner: 'Joseph Aaron Diable'         
})
});





module.exports = router;
