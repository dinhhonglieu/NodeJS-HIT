const express = require('express')
const app = express()
const path = require('path')
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'./HTML/login.html'))
})
app.get('/login', function (req, res){
  res.sendFile(path.join(__dirname, './HTML/login.html'))
})
app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname,'./HTML/register.html'))
})

app.listen(3000)