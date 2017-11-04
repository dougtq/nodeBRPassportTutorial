let express = require('express')
let passport = require('passport')
let session = require('express-session')
let cookieParser = require('cookie-parser')
let consign = require('consign')
let path = require('path')
let app = express()

app.use(express.static(path.join(__dirname, '/views')))
app.use(cookieParser('example'))
app.use(
  session({
    secret: ' ',
    resave: false,
    saveUninitialized: true
    //, cookie: { secure: true }
  })
)
app.use(passport.initialize())
app.use(passport.session())

consign({
  cwd: process.cwd(),
  locale: 'pt-br',
  logger: console,
  verbose: true,
  extensions: ['.js'],
  loggingType: 'info'
})
  .include('src/controllers/account/')
  .then('src/controllers/auth/')
  .then('src/controllers/login/')
  .then('src/controllers/logout/')
  .into(app)

module.exports = app
