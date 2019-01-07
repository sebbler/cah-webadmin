const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/login', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! You are Logged in.`
  })
})

const cards = require('./routes/api/cards')

app.use('/api/cards',cards)

const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server started on port ${port}`))
