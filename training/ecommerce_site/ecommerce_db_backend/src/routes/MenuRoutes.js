const express = require("express");
const menuOptionsRouter = express.Router();

const Menus = require("../schemas/MenuOptionsSchema");

// get images by type
menuOptionsRouter.get("/getimages/:type", async (req, res) => {
  try {
    const findQuery = SiteImage.where({ subtype: req.params.type });
    const myImage = await findQuery.find();
    res.send({ data: myImage });
  } catch (err) {
    console.error(err);
  }
});

// add images
menuOptionsRouter.post("/addimages", async (req, res) => {
  let newImage = new SiteImage(req.body);
  await newImage.save();
  res.send({ msg: "Category added." });
});

module.exports = menuOptionsRouter;
