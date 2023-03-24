const express = require('express')
const app = express()
const path = require('path')
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'./index.html'))
})
app.get('/login', function (req, res){
  res.sendFile(path.join(__dirname, './login.html'))
})
app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname,'./register.html'))
})

app.listen(3000)