const express = require("express");

const Category = require("../schemas/CategorySchema");

const categoryRouter = express.Router();

// add category
categoryRouter.post("/addcategory", async (req, res) => {
  let newCategory = new Category(req.body);
  await newCategory.save();
  res.send({ msg: "Category added." });
});

// get all category
categoryRouter.get("/getallcategory", async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.send(allCategory);
  } catch (err) {
    console.error(err);
  }
});

// update category
categoryRouter.put("/updatecategory/:id", async (req, res) => {
  try {
    await Category.updateOne({ cat_id: req.params.id }, req.body);
    res.send({msg: "Data modified "})
  } catch (err) {
    console.err(err);
  }
});

// get category by id
categoryRouter.get("/getcategory/:id", async (req, res) => {
  try {
    const findQuery = Category.where({ product_id: req.params.id });
    const myCategory = await findQuery.findOne();
    res.send({ msg: myCategory });
  } catch (err) {
    console.error(err);
  }
});

module.exports = categoryRouter;
