const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const productRoutes = require("./src/routes/ProductRoutes");
const categoryRoutes = require("./src/routes/CategoryRoutes");
const siteImageRoutes = require("./src/routes/SiteImagesRoutes");
const menuOptionsRoutes = require("./src/routes/MenuRoutes");
const footerTextsRoutes = require("./src/routes/FooterTextsRoutes");
const brandDirectoryRoutes = require("./src/routes/BrandDirectoryRoutes");
const footerListRoutes = require("./src/routes/FooterRoutes");

// creating app instance
const app = express();

// adding body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// adding cors
app.use(cors());

// adding routes
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/siteimages', siteImageRoutes);
app.use('/menu', menuOptionsRoutes);
app.use('/footertexts', footerTextsRoutes);
app.use('/branddir', brandDirectoryRoutes);
app.use('/footerlist', footerListRoutes);

// connecting to database
async function connectDB(){   
    await mongoose.connect('mongodb://localhost:27017/e-commerce');
    console.log("Connected to DB...")
}

// starting server
app.listen(4000, async () => {
    await connectDB();
    console.log("App listening to port 4000...")
})
