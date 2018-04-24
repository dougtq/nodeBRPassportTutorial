import passport from 'passport'

export default function (app) {
  app.get('/auth/twitter', passport.authenticate('twitter'))

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successReturnToOrRedirect: '/twitter/account',
      failureRedirect: '/login'
    })
  )

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }))

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successReturnToOrRedirect: '/facebook/account',
      failureRedirect: '/login'
    })
  )
}
