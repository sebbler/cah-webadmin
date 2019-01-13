import Api from '@/services/Api'

export default {
  getSets (credentials) {
    return Api().get('sets/all', credentials)
  }

}

