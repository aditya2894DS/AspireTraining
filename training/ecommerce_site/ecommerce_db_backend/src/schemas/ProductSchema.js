const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "id": Number,
    "img": String,
    "top": String,
    "bottom": String
})

const Product =  mongoose.model('Product', productSchema);

module.exports = Product;