const express = require('express')
/* const mongodb = require('mongodb')
*/
const router = express.Router()

/* eslint-disable */
// Get Cards
router.get('/', (req, res, next) => {
    res.status(200).json({
      message: 'GET Requests /login'
    })
});


/*  */
router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Insert new card to cards'
  })
})

/* get single card with id */
router.get('/:cardId', (req, res, next) => {
  const id = req.params.cardId
  if (id === 'special') {
    res.status(200).json({
      message: 'special ID',
      id: id
    })
  } else {
      res.status(200).json({
        message: 'You passed an ID'
      })
    }
})

/* Patch card */
router.patch('/:cardId', (req, res, next) => {
  res.status(200).json({
    message: 'Cards updated'
  })
})

/* Delete card */
router.delete('/:cardId', (req, res, next) => {
  res.status(200).json({
    message: 'Cards deleted'
  })
})

module.exports = router;