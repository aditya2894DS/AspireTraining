const express = require('express');
const siteImagesRouter = express.Router();

const SiteImage = require('../schemas/SiteImageSchema');

// get images by type
siteImagesRouter.get('/getimages/:type', async (req, res) => {
    try {
        const findQuery = SiteImage.where({ subtype: req.params.type });
        const myImage = await findQuery.find();
        res.send({ data: myImage });
      } catch (err) {
        console.error(err);
      }
})

// add images
siteImagesRouter.post('/addimages', async (req, res) => {
    let newImage = new SiteImage(req.body);
    await newImage.save();
    res.send({ msg: "Category added." });
})

module.exports = siteImagesRouter;