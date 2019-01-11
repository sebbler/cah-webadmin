const AuthenticationController = require('./controllers/AuthenticationController.js')

module.exports = (app) => {
  app.post('/login',
    AuthenticationController.login)
}
