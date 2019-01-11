/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const cardsRoutes = require('./routes/api/cards')
/* */

const URI = 'mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@cards-a-hum-tscf6.mongodb.net/test?retryWrites=true/api'
const OPTS = { useNewUrlParser: true };
mongoose.connect(URI, OPTS, function(err) {
  if (err) { return console.error('failed');}
})

/* let db = mongoose.connection
 const url = 'mongodb://abc123:abc123@ds139614.mlab.com:39614/vue_express' */

/* Check DB connection
db.once ('open', function() {
  console.log('Connected to MongoDB')
}) */

/* Check for DB errors
db.on('error', function(err){
  console.log(err)
}) */

/* Init App */
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/* app.use(cors()) */

/* handle CORS errors - append headers to every response - allow all */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*')
  res.header ('Access-Control-Allow-Headers', '*')
  if(req.method ==='OPTIONS') {
    res.header('Axxess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

/* some testing */
let Card = require('./models/cardListModels')

app.post('/register', (req, res) => {
  res.send ({
    message: `Hello ${req.body.email}! You are Logged in.`
  })
})

app.get('/', function(req, res) {
  res.send('Cards against hum hum bumbel bum.')
  /* Card.find({}, function(err, cards){
    if(err){
      console.log(err)
    } else {
      res.render('index', {
        title: 'Cards',
        cards: cards
      })
    }
  }) */
})
app.get('/cards', function(req, res) {
  res.send('cardss')
})

/* routes witch handle requests  */
const loginRoutes = require('./routes/api/login')
const promptRoutes = require('./routes/api/prompt')
app.use('/login',loginRoutes)
app.use('/prompt',promptRoutes)

/* const Card = require('./models/cardListModels')
const cardsList = require('./routes/api/cardListRoutes')
app.use('/api/cardListRoutes', cardsList) */

app.use('/api/cards', cardsRoutes)

/* Error handling - route not found 404 */
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status =404
  next(error)
})

/* detailed error handling - if any error call 500 */
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message:error.message
    }
  })
})

const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server started on port ${port}`))
