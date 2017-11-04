import * as passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as TwitterStrategy } from 'passport-twitter'
import { data } from '../../API/key_secret'

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(
  new FacebookStrategy(
    {
      clientID: data.FB_APP_ID,
      clientSecret: data.FB_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(null, profile)
      // });
    }
  )
)

passport.use(
  new TwitterStrategy(
    {
      consumerKey: data.TWITTER_CONSUMER_KEY,
      consumerSecret: data.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://localhost:3000/auth/twitter/callback' // insert yourl callback endpoint here
    },
    function (token, tokenSecret, profile, done) {
      /* NOTA: Voce tera, provavelmente, que associar o usuario do Twitter
             com um registro do usuario no seu banco de dados. */
      return done(null, profile)
    }
  )
)
