const mongoose = require('mongoose');

const brandDirSchema = new mongoose.Schema({
    "list_heading": String,
    "list_option": [{"id": String, "option": String}]
})

const BrandDir = mongoose.model("BrandDir", brandDirSchema);

module.exports = BrandDir;