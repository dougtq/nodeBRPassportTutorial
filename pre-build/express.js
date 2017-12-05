import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import consign from 'consign'
import path from 'path'
import { passport } from './passport/'

let app = express()
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/styles')))
app.use(cookieParser('example'))
app.use(
  session({
    secret: 'example',
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
  verbose: true,
  extensions: ['.js'],
  loggingType: 'info'
})
  .include('src/controllers/account/index.js')
  .then('src/controllers/auth/index.js')
  .then('src/controllers/login/index.js')
  .then('src/controllers/logout/index.js')
  .into(app)

export { app }
