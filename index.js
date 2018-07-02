require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var flash = require('connect-flash');
var geocoder = require('geocoder');
var db = require('./models');

var app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
//app.set("layout extractScripts", true)
app.use(express.static(__dirname + '/public/'));


//1. This must come before you use app.use passport.
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

//2. This initializes flash... setup flash messages.
app.use(flash());

//3. This must come after the session setup.
app.use(passport.initialize());
app.use(passport.session());

//4. Attach the currentUser to the response for all routes.
//Also attaches the flash messages.
app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

//Routes
app.get('/', isLoggedIn, function(req, res) {
  db.tour.findAll().then(function(data){
    console.log(data)
    res.render('index', {tours: data})
  })
  ;
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});





app.use('/auth', require('./controllers/auth'));
app.use('/locations', require('./controllers/locations'));
app.use('/tours', require('./controllers/tours'));
// app.use('/user', require('./controllers/user'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
