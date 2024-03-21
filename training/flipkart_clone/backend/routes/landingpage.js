const express = require('express');
const landingRouter = express.Router();
const fs = require('fs');

const landingPageCategories = './data/categoryList.json';
const footerLinks = './data/footerData/footerLinkList.json';
const socialLinks = './data/footerData/socialLinks.json';

// get categories
landingRouter.get('/categories', (req, res) => {
    fs.readFile(landingPageCategories, 'utf-8', (err, data) => {
        if(err){
            throw err
        }
        res.send(JSON.parse(data))
    })
})

// add new category
landingRouter.post('/addcategory', (req, res) => {
    const data = fs.readFileSync(landingPageCategories, { encoding: 'utf-8' });
    let parsedData = JSON.parse(data)

    parsedData[req.body.id] = req.body
    let stringedData = JSON.stringify(parsedData)

    fs.writeFile(landingPageCategories, stringedData, err =>{
        if(err){
            throw err;
        }
        res.send({msg: 'object added'})
    })
})

// update category
landingRouter.put('/updatecategory/:id', (req, res) => {
    const data = fs.readFileSync(landingPageCategories, { encoding: 'utf-8' });
    let parsedData = JSON.parse(data);

    // console.log(req.params.id)

    parsedData.forEach(obj => {
        if(obj.id == req.params.id){
            let requestObjKey = Object.keys(req.body);
            requestObjKey.forEach(key => {
                if(key !== 'id'){
                    obj[key] = req.body[key];
                }
            })
        }
    })
    
    let stringedData = JSON.stringify(parsedData);

    fs.writeFile(landingPageCategories, stringedData, err => {
        if(err){
            res.send({ msg: err });
        }
        res.send({msg: "object modified"})
    })

    // if(Object.keys(req.body).includes('id')){
    //    if(req.body.id < req.params.id){
    //     for(let i = req.body.id; i< parsedData.length; i++){
    //         parsedData[i].id += 1 
    //     }
    //    }
    // }


    // res.send(parsedData)


})

// delete category
landingRouter.delete('/deletecategory/:id', (req, res) => {
    const data = fs.readFileSync(landingPageCategories, { encoding: 'utf-8' });
    let parsedData = JSON.parse(data);

    parsedData.splice(req.params.id-1, 1);

    let arr = []
    parsedData.forEach(obj => {
        if(obj.id > req.params.id){
            obj.id = obj.id - 1;
        }
        arr.push(obj)
    })

    let stringedData = JSON.stringify(arr);

    fs.writeFile(landingPageCategories, stringedData, err => {
        if(err){
            res.send({ msg: err });
        }
        res.send({msg: "object removed"})
    })


})

module.exports = landingRouter;

// footer routes
landingRouter.get('/footerlinks', (req, res) => {
    fs.readFile(footerLinks, 'utf-8', (err, data) => {
        if(err){
            throw err
        }
        res.send(JSON.parse(data))
    })
})

// social link routes
landingRouter.get('/sociallinks', (req, res) => {
    fs.readFile(socialLinks, 'utf-8', (err, data) => {
        if(err){
            throw err
        }
        res.send(JSON.parse(data))
    })
})
