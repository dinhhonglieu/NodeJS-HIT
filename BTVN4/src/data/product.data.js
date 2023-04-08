let products = require('./data');
const fs = require('fs');
const path = require('path');
const saveData = (data) => {
    fs.writeFile(path.join(__dirname, '/data.js'),JSON.stringify(products), function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Successfully !');
        }
    });
}

class Product {
    constructor(id, title, price, description, category, image, rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }

    save() {
        products.push(this);
        saveData(products);
        console.log(JSON.stringify(products));
      }
    static getAll() {
        return products;
    }
    static getById(id) {
        const product = products.find((product) => product.id == id);
    
        return product;
      }
      static updateById(id) {
        const index = products.findIndex(product => product.id == id);
        const newProduct = new Product(data.id, data.title, data.price, data.description, data.category, data.image, data.rating);

        products.splice(index, 1, newProduct);
        
        saveData(products);
      }
    static deleteById(id) {
        const index = products.findIndex(product => product.id == id);
    
        products.splice(index, 1);
        
        saveData(products);
      }
}

module.exports = Product;