const Product = require('../models/product')


//get all products
exports.getProducts = (req,res,next) => {
    Product.find()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


//get product by id
exports.getProduct = (req,res,next) => {
    Product.findById(req.params.id)
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


//create product
exports.createProduct = (req,res,next) => {
    req.body.image = req.file.path
    Product.create(req.body)
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


//update product
exports.updateProduct = (req,res,next) => {
    Product.update({_id:req.params.id},req.body)
        .then(() => {
            Product.findById(req.params.id)
                .then(product => {
                    res.status(200).send(product)
                })
                .catch(err => {
                    res.status(400).send(err)
                })
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


//delete order
exports.deleteProduct = (req,res,next) => {
    Product.remove({_id:req.params.id})
        .then(() => {
            res.status(200).send('Product Deleted')
        })
        .catch(err => {
            res.status(400).send(err)
        })
}