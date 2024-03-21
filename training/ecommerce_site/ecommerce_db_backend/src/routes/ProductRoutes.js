const express = require("express");

const Product = require("../schemas/ProductSchema");

const productRouter = express.Router();

// add product route
productRouter.post("/addproduct", async (req, res) => {
  let newProduct = new Product(req.body);
  await newProduct.save();
  res.send({ msg: "Product added" });
});

// get all product
productRouter.get("/getallproduct/", async (req, res) => {
  try {
    const myProducts = await Product.find();
    res.send({msg: myProducts});
  } catch (err) {
    console.error(err);
  }
});

// get product route
productRouter.get("/getproduct/:id", async (req, res) => {
  try {
    const findQuery = Product.where({ product_id: req.params.id });
    const myProduct = await findQuery.findOne();
    res.send({msg: myProduct.price});
  } catch (err) {
    console.error(err);
  }
});

// update product route
productRouter.put("/updateproduct/:id", async (req, res) => {
   
    try{
        const updated = await Person.updateOne({product_id: req.params.id}, )
    }catch(err){
        console.error(err);
    }
})

module.exports = productRouter;
