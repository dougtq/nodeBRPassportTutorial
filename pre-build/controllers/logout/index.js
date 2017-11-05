module.exports = (application) => {
  application.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
}
