const express = require('express');
const path = require('path');
const app = express();
const router = require('./router/product.router');

const port = 3000;

//middleware
app.use(express.urlencoded());
app.use(express.json());
//set foder contani views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use('/static', express.static(path.join(__dirname,'src','public')));
app.use('/api/products', router);
app.listen(port, ()=>{
    console.log('thu 3 vui ve');
})
