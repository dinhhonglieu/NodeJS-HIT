const Product = require('../data/data');


const getProducts = (req, res) =>{
    const products = Product.getAll();
    res.json(products);
}
const getProductById = (req, res) =>{
    const id = req.params.id;
    const products = Product.getAll();
    const product = products.find( product => product.id == id)
    res.json(product);    
}
const createProduct = (req, res) =>{
    const data = req.body;
    const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);
    newProduct.save();

    res.json(newProduct);

}
const updateProductById = (req, res) =>{
    const products = Product.getAll();
    const id = req.params.id;
    const product = Product.getById(id);
    if (!product) {
      res.json({err: "Khong tim thay san pham"});
    }
   Product.updateById(id);
   res.json(products);
}
const deleteProductById = (req, res) =>{
    const products = Product.getAll();
    const id = req.params.id;

    const product = Product.getById(id);
    if (!product) {
      res.json({err: "Khong tim thay san pham"});
    }
    Product.deleteById(id);
    res.json(products);
}
module.exports = {
    getProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    getProductById
}