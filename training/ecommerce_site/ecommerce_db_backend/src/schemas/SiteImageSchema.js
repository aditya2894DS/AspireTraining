const mongoose = require("mongoose");

const siteImageSchema = new mongoose.Schema({
    "image_id": String,
    "url": String,
    "type": String,
    "subtype": String
})

const SiteImage = mongoose.model("SiteImage", siteImageSchema) 

module.exports = SiteImage;