const express = require("express");
const footerTextsRouter = express.Router();

const FooterTexts = require("../schemas/FooterTextSchema");

// add footer text
footerTextsRouter.post("/addtexts", async (req, res) => {
  let newFooterText = new FooterTexts(req.body);
  await newFooterText.save();
  res.send({ msg: "Footer text added." });
});

// update footer text
footerTextsRouter.put("/updatetext/:id", async (req, res) => {
    try{
        await FooterTexts.updateOne({text_id: req.params.id}, req.body)
        res.send({msg: "Data modified "})
    }catch(err){
        console.error(err);
    }
})

// get footer all text 
footerTextsRouter.get("/gettext", async (req, res) => {
    try {
        const myCategory = await FooterTexts.find();
        res.send({ msg: myCategory });
      } catch (err) {
        console.error(err);
      }
})

module.exports = footerTextsRouter;