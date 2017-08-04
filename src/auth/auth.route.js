const passport = require('passport');

module.exports = function(application) {
  application.get('/auth/twitter', passport.authenticate('twitter'));
  application.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', {
      successReturnToOrRedirect: '/account',
      failureRedirect: '/login'
    })
  );
};
