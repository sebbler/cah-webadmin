'user strict'

/* eslint-disable */
var mongoose = require('mongoose')
var User = mongoose.model('Users')

exports.list_all_cards = function (req, res) {
  User.find({}, function (err, user){
    if(err){
      res.send(err)}
    res.json(user)
  })
}

exports.create_a_card = function (req, res) {
  var new_card = new Card(req.body)
  new_card.save(function(err, card) {
    if (err){
      res.send(err)}
    res.json(card)
  })
}

exports.read_a_card = function (req, res){
  Card.findById(req.params.cardId, function (err, card){
    if (err)
      res.send(err)
    res.json(card)
  })
}