const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn; 

module.exports = function(application) {
  application.get('/account', ensureLoggedIn('/login'), function(req, res) {
    // console.log(req.user);
    res.send(
      '<html><body>Ola ' +
        req.user.displayName +
        ' de ' +
        req.user._json.location +
        '.<br/><a href="/logout">Logout</a></body></html> '
    );
  });
};
