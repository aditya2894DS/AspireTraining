import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    p_id: Number,
    category: String,
    p_name: String,
    price: mongoose.Decimal128,
    stockLeft: Number
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;