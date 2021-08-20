const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/assets/css/mediumish.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/css/mediumish.css'))
})

app.get('/assets/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/css/bootstrap.min.css'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})