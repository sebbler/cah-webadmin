'use strict'

module.exports = function (app) {
  var cardList = require('../controllers/cardListController')

  app.route('/cards')
    .get(cardList.list_all_cards)
    .post(cardList.create_a_card)

  app.route('cards/:cardId')
    .get(cardList.read_a_card)
}
