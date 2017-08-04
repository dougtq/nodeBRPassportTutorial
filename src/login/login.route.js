module.exports = function(application) {
  application.get('/login', function(req, res) {
    res.send(
      '<html><body><a href="/auth/twitter">Login com Twitter</a></body></html>'
    );
  });
};
