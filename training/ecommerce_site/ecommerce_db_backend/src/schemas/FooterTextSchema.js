const mongoose = require("mongoose");

const footerTextSchema = new mongoose.Schema({
  "text_heading": String,
  "desc": [{"id": Number, "text": String}]
});

const FooterTexts = mongoose.model("FooterTexts", footerTextSchema);

module.exports = FooterTexts;
