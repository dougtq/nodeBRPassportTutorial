var express = require('express'),
  passport = require('passport'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  consign = require('consign'),
  app = express();

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('teste'));
app.use(
  session({
    secret: ' ',
    resave: false,
    saveUninitialized: true
    /*,cookie: { secure: true }*/
  })
);
app.use(passport.initialize());
app.use(passport.session());

// carregamento de rotas, controllers e models
consign({ verbose: true }) /* setting the verbose property as false */
  .include('src/account/')
  .include('src/auth/')
  .include('src/login/')
  .include('src/logout/')
  .into(app);

module.exports = app;
