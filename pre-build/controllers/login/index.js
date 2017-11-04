module.exports = (app) => {
  app.get('/login', (req, res) => {
    res.send(
      `<html><body><a href='/auth/twitter'>Login com Twitter</a>
      <br><a href='/auth/facebook'>Login com Facebook</a></body></html>`
    )
  })
}
