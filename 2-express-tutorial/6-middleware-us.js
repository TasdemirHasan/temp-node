const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

//1. use vs route
//2. options - our own / express / third party


// app.use([authorize,logger])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about',(req, res) => {
    res.send('About')
})

app.get('/api/products',[logger,authorize],(req, res) => {
    res.send('Products')
})

app.get('/api/items',[logger,authorize],(req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})