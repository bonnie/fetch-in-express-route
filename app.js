const express = require('express')
const fetch = require('node-fetch')
const urlencode = require('urlencode')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/results', (req, res) => {
  const term = req.query.term
  const searchTermURLEscaped = urlencode(term)
  const url = `https://itunes.apple.com/search?term=${searchTermURLEscaped}`
  fetch(url)
    .then(result => result.json())
    .then((songs) => {
      res.render('songs', { term, songs: songs.results })
    })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
