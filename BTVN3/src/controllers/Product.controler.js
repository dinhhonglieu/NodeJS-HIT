const data = require("../data/data")

const getProduct = (req, res) =>{
    console.log(data);
    res.render('product', {
        title :"HELLO",
        products: data,
        check: false,

});
};
const addProcduct = (req, res) =>{
    console.log(data);
    res.render("add-product");
};
module.exports = {
    getProduct,
    addProcduct,
};
