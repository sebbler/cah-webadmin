import axios from 'axios'

const url = 'api/sets/all'

class CardsService {
  // Get Cards
  static getCards () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        console.log(data)
        resolve(
          data(cards => ({
            ...cards
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }
  // Create Card
  static insertCard (text) {
    return axios.post(url, {
      text
    })
  }

  // Delete Card
  static deleteCard (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default CardsService
