const mongoose = require("mongoose");

const menuOptionsSchema = new mongoose.Schema({
    "menuType": String,
    "menuName": String,
    "options": [String]
})

const MenuOption =  mongoose.model('MenuOption', menuOptionsSchema);

module.exports = MenuOption;