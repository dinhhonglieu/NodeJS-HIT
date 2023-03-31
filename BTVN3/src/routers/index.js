const express = require("express");
const router = express.Router();
const {
    getProduct,
    addProcduct
    } = require('../controllers/Product.controler')

router.get('/products', getProduct);
router.get('/add-product', addProcduct);
module.exports = router;