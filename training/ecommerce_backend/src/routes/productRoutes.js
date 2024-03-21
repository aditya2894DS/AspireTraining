const express = require('express');
const productRouter = express.Router();

const fs = require('fs');

const productDataPath = './src/data/products.json';

productRouter.get('/all', (req, res) => {
    fs.readFile(productDataPath, 'utf-8', (err, data) => {
        if(err){
            throw err;
        }

        res.send(JSON.parse(data));

    })
})

let myProduct = {
    "id": 20,
    "title": "Aditya Product 1",
    "description": " Etiam et dolor porttitor, consequat enim sed, sodales lectus. Curabitur tristique mi ac pharetra elementum. Sed non condimentum augue, id posuere enim. Praesent consectetur non libero vehicula elementum.",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
    ]
}

// let newData = JSON.stringify(newProduct, null, 2)

productRouter.get('/newproduct', (req, res) => {


//    const usersData = fs.readFileSync(productDataPath, 'utf-8')

//    let users = JSON.parse(usersData)
//    console.log(users)
   
    // let newUsers = users.push(newProduct)

    fs.readFile(productDataPath)
        .then(data => JSON.parse(data))
        .then(data => data.push(myProduct))
        .then()

    // fs.writeFile(productDataPath, newUsers, err => {
    //     if(err){
    //         throw err;
    //     }
    // })
})


module.exports = productRouter;