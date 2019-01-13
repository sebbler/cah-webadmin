const express = require('express')
const router = express.Router()

/* eslint-disable */
// Get Cards
router.get('/', async (req, res) => {
    // res.send(await 'Hier werden die Karten aus der Datenbank geladen: ...')
    const cards = await loadCardsCollection();
    res.send(await cards.find({}).toArray());/**/
});


// Add Cards
router.post('/', async (req, res) => {
    const cards = await loadCardsCollection();
    await cards.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});
/**/


// Delete Cards
router.delete('/:id', async (req, res) => {
    const cards = await loadCardsCollection();
    await cards.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});

// connection to database, get all cards
async function loadCardsCollection(){
    const client = await mongodb.MongoClient.connect
    // ('ec2-52-202-79-225.compute-1.amazonaws.com:8080/api/cards/promt', {
    ('mongodb://abc123:abc123@ds139614.mlab.com:39614/vue_express', {
        useNewUrlParser: true
    });

    return client.db('vue_express').collection('cards');
}

module.exports = router;
