const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = require("./src/routers/index")
//form 
app.use(express.urlencoded())
//json
app.use(express.json())
app.set("views", path.join(__dirname,'src', 'views'))
app.set("view engine", 'ejs')
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
