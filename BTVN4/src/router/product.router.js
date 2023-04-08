const router = require('express').Router();
const {getProducts,
    creatProducts,
    getProductsById,
    updateProducts,
    deleteProducts,

}= require('../controllers/product.controller');
router.get('/', getProducts);
router.post('/',creatProducts);
router.put('/:id',updateProducts);
router.delete('/:id',deleteProducts);
router.get('/:id',getProductsById);


module.exports = router;