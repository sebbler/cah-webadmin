const AuthenticationController = require('../controllers/AuthenticationController.js')

module.exports = (app) => {
  app.post('/login2',
    AuthenticationController.login)
}
