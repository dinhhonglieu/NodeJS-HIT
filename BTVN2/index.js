const express = require('express')
const app = express()
const path = require('path')
const router = require("./src/routers")
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname,'./HTML/login.html'))
// })
// app.get('/login', function (req, res){

//   res.sendFile(path.join(__dirname, './HTML/login.html'))
// })
// app.get('/register', function(req, res){
//   res.sendFile(path.join(__dirname,'./HTML/register.html'))
// })
// console.log(__dirname);
app.set("views", path.join(__dirname, 'src', "views"));
console.log( path.join(__dirname, 'src', "public"))
app.set("view engine","ejs");
app.use("/static",express.static( path.join(__dirname, 'src',"public")))
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>
{
  res.render('index.ejs')
})

app.use("/", router)

app.listen(3000, () => {
  console.log("app running")
})


/*
const express = require('express'); 
const path = require("path");
const app = express(); 
const router = require('./router');

const port = 3000;

app.set("views", path.join(__dirname,"view"));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(router)

app.listen( port, () => {
    console.log(${port});
})
*/




