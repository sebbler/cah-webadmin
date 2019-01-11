'use strict'

/* eslint-disable */
let mongoose = require('mongoose')

/* Card List Schema */
let CardSchema = mongoose.Schema({
  card_text: {
    type: String,
    Required: true
  },
  card_type: {
    type: String,
    Required: true
  },
  card_special: {
    type: String,
    Required: true
  }
})

let Cards = module.exports = mongoose.model('Cards', CardSchema)
