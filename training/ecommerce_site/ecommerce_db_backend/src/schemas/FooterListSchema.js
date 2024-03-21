const mongoose = require('mongoose');

const footerListSchema = new mongoose.Schema({
   "id": Number,
   "mainTitle": String,
   "options": [{"id": Number, "title": String}]
})

const FooterList = mongoose.model("FooterList", footerListSchema);

module.exports = FooterList;