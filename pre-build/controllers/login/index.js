
export default app => {
  app.get('/login', (req, res) => {
    res.render('login')
  })
}
