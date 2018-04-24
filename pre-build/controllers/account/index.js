import { ensureLoggedIn } from 'connect-ensure-login'

export default (application) => {
  application.get('/twitter/account', ensureLoggedIn('/login'), function (req, res) {
    res.render('logged', { user: req.user })
  })

  application.get('/facebook/account', ensureLoggedIn('/login'), function (req, res) {
    res.render('logged', { user: req.user })
  })
}
