const app = require('./express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

app.get('/', (req, res) => {
  res.send(
    '<html><body> Inscreva-se pelo Twitter ou Facebook <br/><a href="/login">Login</a></body></html>'
  )
})

let server = app.listen(3000)
console.log('Servidor express iniciado na porta %s', server.address().port)
