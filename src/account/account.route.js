const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn; 

module.exports = function(application) {
  application.get('/twitter/account', ensureLoggedIn('/login'), function(req, res) {
    // console.log(req.user);
    res.send(
      '<html><body>Ola ' +
        req.user.displayName +
        ' de ' +
        req.user._json.location +
        '.<br/><a href="/logout">Logout</a></body></html> '
    );
  });

  application.get('/facebook/account', ensureLoggedIn('/login'), function(req, res) {
    console.log(req);
    res.send(
      '<html><body>Ola ' +
        req.user.displayName +
        ' <br/><a href="/logout">Logout</a></body></html> '
    );
  });

};
