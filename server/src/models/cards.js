const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  card_text: String,
  card_special: String
})

module.exports = mongoose.model('Prompt', cardSchema)
