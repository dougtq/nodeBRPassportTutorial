
export default (application) => {
  application.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
}
