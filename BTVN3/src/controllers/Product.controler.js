const data = require("../data/data")

const getProduct = (req, res) =>{
    console.log(data);
    console.log(req.query);
    const a = data.filter( (product ) =>{
        if(product.price > req.query.price)
        {
            return product
        }
    })
    

//    res.json(data);
   res.json(a);
//     res.render('product', {
//         title :"HELLO",
//         products: getProcductID,
//         check: false,


// });
};
const addProcduct = (req, res) =>{
    console.log(data);
    console.log(req.body)
    res.render("add-product");
    // data.push(req.body);
    // res.json(data);  
};
const postAddProcduct = (req, res) =>{
    console.log(req.body);
}

const getProductDetail = (req, res) =>{
    console.log(req.params)
    const productId = req.params.productId;
    const productDetail = data.filter((item)=>{
        return item.id == productId
    })
   console.log(productDetail);
    res.json(productDetail)
}
module.exports = {
    getProduct,
    addProcduct,
    postAddProcduct,
    getProductDetail,
};
