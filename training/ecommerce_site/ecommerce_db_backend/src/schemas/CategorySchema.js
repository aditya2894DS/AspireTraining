const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  cat_id: String,
  image: String,
  name: String,
  isDropdown: Boolean,  
  subCategories: [
    { id: Number, name: String, subCategories: [{ id: Number, name: String }] },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
