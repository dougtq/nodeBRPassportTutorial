const passport = require('passport');

module.exports = function(application) {
  application.get('/auth/twitter', passport.authenticate('twitter'));
  application.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', {
      successReturnToOrRedirect: '/twitter/account',
      failureRedirect: '/login'
    })
  );

  application.get('/auth/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));
  application.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successReturnToOrRedirect: '/facebook/account',
      failureRedirect: '/login'
    })
  );
};
