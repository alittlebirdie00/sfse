let express = require('express')
let path = require('path')
let app = express()
let port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.get('/beginner_topics/*', (req, res) => {
  const l = req.path.length;
  res.render(req.path.substring(1, l + 1));
})

app.get('/advanced_topics/*', (req, res) => {
  const l = req.path.length;
  res.render(req.path.substring(1, l + 1));
})

app.get('/intern_prep/*', (req, res) => {
  const l = req.path.length;
  res.render(req.path.substring(1, l + 1));
})

app.get('/full_time_prep/*', (req, res) => {
  const l = req.path.length;
  res.render(req.path.substring(1, l + 1));
})

app.get('/assets/css/mediumish.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/css/mediumish.css'))
})

app.get('/assets/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/css/bootstrap.min.css'))
})

app.get('/assets/img/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path))
})

app.get('/assets/js/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path))
})

app.get('/assets/css/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));