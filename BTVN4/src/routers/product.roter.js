const router = require('express').Router();
const {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
} = require('../controllers/product.controller');
// http method
//Get
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;