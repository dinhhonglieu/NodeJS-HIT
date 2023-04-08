const Product = require('../data/product.data');

const getProducts = (req, res) =>{
    const product = Product.getAll();
    res.json(product);
}
const creatProducts = (req, res) =>{
    const data = req.body;
    const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);
    newProduct.save();
    res.json(newProduct);
}
const getProductsById = (req, res) =>{
    const id = req.params.id;
    const product = Product.getById(id);
    res.json(product);
}
const updateProducts = async(req, res) =>{
    // var myId = req.params.id;
    // const product = Product.getById(myId);
    // if (!product) {
    //     res.status(404).json({ error: "No Product Found !" });
    //     return;
    // }
    // const data = req.body;
    // const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);
    // const objProduct = { ...newProduct };
    // var index = products.findIndex((item) => item.id == myId);
    // products[index] = objProduct;
    // Product.saveData();
    // res.json(products);
    const id = req.params.id;
    Product.updeteById(id);
    res.json();
}
const deleteProducts = (req, res) =>{
    const id = req.params.id;
    Product.deleteById(id);
    res.json();
}
module.exports = {
    getProducts,
    creatProducts,
    getProductsById,
    updateProducts,
    deleteProducts,
}