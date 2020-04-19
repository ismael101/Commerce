const Order = require('../models/order')

//get all orders
exports.getOrders = (req,res,next) => {
    Order.find()
        .populate('product')
        .then(orders => {
            res.status(200).send(orders)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

//get a order by id
exports.getOrder = (req,res,next) => {
    Order.findById(req.params.id)
        .populate('product')
        .then(order => {
            res.status(200).send(order)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

//create order
exports.createOrder = (req,res,next) => {
    Order.create(req.body)
        .then(order => {
            Order.findById(order._id)
                .populate('product')
                .then(order => {
                    res.status(200).send(order)
                })
                .catch(err => {
                    res.status(400).send(err)
                })
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

//update order
exports.updateOrder = (req,res,next) => {
    Order.update({_id:req.params.id},req.body)
        .then(() => {
            Order.findById(req.params.id)
                .populate('product')
                .then(order => {
                    res.status(200).send(order)
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
exports.deleteOrder = (req,res,next) => {
    Order.remove({_id:req.params.id})
        .then(() => {
            res.status(200).send('Order Deleted')
        })
        .catch(err => {
            res.status(400).send(err)
        })
}