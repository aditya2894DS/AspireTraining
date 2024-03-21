const express = require("express");
const brandDirectoryRouter = express.Router();

const BrandDirectory = require("../schemas/BrandDirectorySchema");

// add footer text
brandDirectoryRouter.post("/addbd", async (req, res) => {
  let newBrandDir = new BrandDirectory(req.body);
  await newBrandDir.save();
  res.send({ msg: "Footer text added." });
});

// get footer all text 
brandDirectoryRouter.get("/getbd", async (req, res) => {
    try {
        const myBrand = await BrandDirectory.find();
        res.send({ msg: myBrand });
      } catch (err) {
        console.error(err);
      }
})

module.exports = brandDirectoryRouter;