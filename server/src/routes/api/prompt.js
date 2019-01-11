const express = require('express')
const mongoose = require('mongoose')
/* const mongodb = require('mongodb') */
const router = express.Router()

const Card = require('../../models/cards')

/* eslint-disable */
// Get Prompt Cards
router.get('/', (req, res, next) => {
  res.status(201).json({
    message: 'Prompt cards get'
  })
})

/* insert new prompt card  */
router.post('/', (req, res, next) => {
  const prompt_card = new Card({
    _id: new mongoose.Types.ObjectId(),
    card_text: req.body.card_text,
    card_special: req.body.card_special
  })
  prompt_card.save().then(result => {
    console.log(result)
  })
    .catch(err => console.log(err))
  res.status(201).json({
    message: 'Insert new card to promt cards',
    createdPrompt: prompt_card
  })
})

/* get single prompt card with id */
router.get('/:promptId', (req, res, next) => {
  const id = req.params.promptId
  Card.findById(id)
    .exec()
    .then(doc => {
      console.log(doc)
      res.status(200).json(doc)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    })
})

/* Patch prompt card */
router.patch('/:promptId', (req, res, next) => {
  res.status(200).json({
    message: 'Cards updated'
  })
})

/* Delete prompt card */
router.delete('/:promptId', (req, res, next) => {
  res.status(200).json({
    message: 'Cards deleted'
  })
})

module.exports = router;