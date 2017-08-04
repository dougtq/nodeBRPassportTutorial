const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn; 
const app = require('./src/express');
require('./src/key_secret'); // Arquivo Separado que seta duas variaveis globais key e o secret para "conectar" ao Twitter

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(
  new TwitterStrategy(
    {
      consumerKey: global.TWITTER_CONSUMER_KEY,
      consumerSecret: global.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://192.168.15.87:3000/auth/twitter/callback' // insira seu ip interno ou externo aqui
    },
    function(token, tokenSecret, profile, done) {
      // NOTA: Voce tera, provavelmente, que associar o usuario do Twitter
      //       com um registro do usuario no seu banco de dados.
      var user = profile;
      return done(null, user);
    }
  )
);

app.get('/', function(req, res) {
  res.send(
    '<html><body>Ola mundo<br/><a href="/login">Login</a></body></html>'
  );
});


var server = app.listen(3000);
console.log('Servidor express iniciado na porta %s', server.address().port);
