import { app } from './express'
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(3000, err => {
  if (err) process.exit(1)

  console.log('Oauth server running')
})
