const express = require("express");

const FooterList = require("../schemas/FooterListSchema");

const footerRouter = express.Router();

// add category
footerRouter.post("/addfooterlist", async (req, res) => {
  let footerList = new FooterList(req.body);
  await footerList.save();
  res.send({ msg: "Category added." });
});

// get all category
footerRouter.get("/getallfooterlist", async (req, res) => {
  try {
    const allFooterList = await FooterList.find();
    res.send(allFooterList);
  } catch (err) {
    console.error(err);
  }
});



module.exports = footerRouter;
