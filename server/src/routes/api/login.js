const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const User = require('../../models/userModel')

/* eslint-disable */
// Get Users
router.get('/', (req, res, next) => {
  /* find().limit or find().where to filter data
  User.find().where */
  /* find all */
  User.find()
    .exec()
    .then(docs => {
      console.log(docs)
      res.status(200).json(docs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    })
});


/* create new user - save to db */
router.post('/', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password
  })
  user.save()
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: `Hello ${req.body.name}! You are Logged in.`,
        createdUser: user
      })
  })
    .catch (err => {
      console.log(err)
      res.status(500).json({error: err})
    })
})

/* get user by id from db */
router.get('/:userId', (req, res, next) => {
  const id = req.params.userId
  User.findById(id)
    .exec()
    .then(doc => {
      console.log("From database: ", doc)
      if(doc) {
        res.status(200).json(doc)
      } else {
        res.status(404).json({message:'No valid User found for ID'})
      }

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    })
})

/* Patch card */
router.patch('/:userId', (req, res, next) => {
  const id = req.params.userId
  const updateOps = {}
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value
  }
  User.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
      console.log(res)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
  /* res.status(200).json({
    message: 'Cards updated'
  }) */
})


/* Delete card */
router.delete('/:userId', (req, res, next) => {
  const id = req.params.userId
  User.remove({_id: id})
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

module.exports = router;