const express = require("express");
const userRouter = express.Router();
const fs = require('fs');

const userDataPath = './src/data/users.json'; 

userRouter.get('/all', (req, res) => {
    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if(err){
            throw err
        }
        res.send(JSON.parse(data));
    })
})


module.exports = userRouter;