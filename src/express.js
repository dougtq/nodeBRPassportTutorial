var express = require('express'),
passport = require('passport'),
session = require('express-session'),
cookieParser = require('cookie-parser'),
app = express();

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({ secret: ' ' }));
app.use(passport.initialize());
app.use(passport.session());


module.exports = app;