var express = require('express');
var path = require('path');
var app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../app', 'index.html'))
})
app.get('/bundle.js', (req, res) => {
  console.log('DDD')
  res.sendFile(path.join(__dirname, '../../app', 'bundle.js'))
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}
