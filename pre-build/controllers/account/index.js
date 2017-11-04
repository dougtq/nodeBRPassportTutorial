import { ensureLoggedIn } from 'connect-ensure-login'

module.exports = (application) => {
  application.get('/twitter/account', ensureLoggedIn('/login'), function (req, res) {
    // console.log(req.user);
    res.send(
      '<html><body>Olá ' +
        req.user.displayName +
        ' de ' +
        req.user._json.location +
        '.<br/><a href="/logout">Logout</a></body></html> '
    )
  })

  application.get('/facebook/account', ensureLoggedIn('/login'), function (req, res) {
    res.send(
      '<html><body>Olá ' +
        req.user.displayName +
        ' <br/><a href="/logout">Logout</a></body></html> '
    )
  })
}
