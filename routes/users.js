var express = require('express');
var router = express.Router();  
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Register
router.get('/register', function(req, res, next){
    res.render('register');
});

//Login
router.get('/login', function(req, res, next){
    res.render('login');
});

router.post('/login',function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req,res) {
    req.logout();

    req.flash('Success_msg', 'You are logged out');

    res.redirect('/users/login');
});

module.exports = router;


