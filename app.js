const express = require('express')
const fetch = require('node-fetch')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/results', (req, res) => {
  res.render('songs', { term: req.query.term })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
