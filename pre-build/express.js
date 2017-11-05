import express from 'express'
// import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import consign from 'consign'
import path from 'path'
import { passport } from './passport/'

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

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(passport.session())

consign({
  cwd: process.cwd(),
  locale: 'pt-br',
  logger: console,
  verbose: false,
  extensions: ['.js'],
  loggingType: 'info'
})
  .include('pre-build/controllers/account/')
  .then('pre-build/controllers/auth/')
  .then('pre-build/controllers/login/')
  .then('pre-build/controllers/logout/')
  .into(app)

module.exports = app
