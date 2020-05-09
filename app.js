var express = require('express');
var path =  require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash =  require('connect-flash');
var session =  require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'), Strategy;
var mongo =  require('mongodb');
var mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/login', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

var db =  mongoose.connection;

//creating my routes
var routes = require('./routes/index');
var users =  require('./routes/users');

//initailize app
var app = express();

//creating an engine for views
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'})); //setting  handle bars as engine
app.set('view engine', 'handlebars');


// BodyParser Middleware (Parse incoming request bodies in a middleware before your handlers available)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// creating a public folder(static) to store images, jquery etc
app.use(express.static(path.join(__dirname,'public')));


//Creating middleware for expess Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// initializing passport
app.use(passport.initialize());
app.use(passport.session());

// Express Validator from git-hub
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split(".")
        , root  = namespace.shift()
        , formParam =  root;

        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return{
            param: formParam,
            msg : msg,
            value: value
        };
    }
}));

// Creating a Flash middleware
app.use(flash());

//set our global variables for messaging 
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');  // we have this here because passports sets its own messages
    res.locals.user = req.user || null;
    next();
});

//we need now to mapp these route files
app.use('/', routes);
app.use('/users', users);

//set Ports
app.set('port', (process.eventNames.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Server runing on port: ' +app.get('port'));
});
