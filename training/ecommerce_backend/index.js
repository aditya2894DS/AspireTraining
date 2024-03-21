// importing express
const express = require('express');
const bodyParser = require('body-parser');

// creating express instance
const app = express();

// setting port number
const port = 3001;

// loading nodejs file handling class
// this is for loading our json files

// body parser setting for the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// importing routes
const user = require('./src/routes/userRoutes');
const product = require('./src/routes/productRoutes');

// adding routers
app.use('/user', user);
app.use('/product', product);

app.get('/', (req, res) => {
    res.send('e-commerce home page')
})

app.listen(port, () => {
    console.log(`App listening in port: ${port}`)
})