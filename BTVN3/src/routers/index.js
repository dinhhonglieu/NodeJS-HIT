const express = require("express");
const router = express.Router();
const productController = require('../controllers/Product.controler')

router.get('/products', productController.getProduct);
router.get('/add-product', productController.addProcduct);
router.get('/products/:productId', productController.getProductDetail)
router.post('/add-product',productController.postAddProcduct );
router.post('/products', productController.addProcduct);

module.exports = router;