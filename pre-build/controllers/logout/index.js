module.exports = function (application) {
  application.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}
