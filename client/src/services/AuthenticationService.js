import Api from '@/services/Api'

export default {
  login (credentials) {
    return Api().post('login', credentials)
  }
}

/* AuthenticationService.register({
  email: 'test@mail.com',
  password: '1234'
}) */
