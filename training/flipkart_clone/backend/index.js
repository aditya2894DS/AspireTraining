const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const bodyParser = require('body-parser')

const landingRouter = require('./routes/landingpage')

// configuring body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// using cors
app.use(cors());

// using landing page router
app.use('/landing', landingRouter);

// connect to db
async function dbConnect(){
  await mongoose.connect('mongodb://localhost:27017/e-commerce');
  console.log("Connected to DB")
}

app.listen(4001, async () => {
    await dbConnect();
    console.log("App listening to port 4000")
})

