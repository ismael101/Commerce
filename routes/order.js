const controller = require('../controllers/order')
const express = require('express')
const router = express.Router()

//CRUD endpoints
router.get('/', controller.getOrders)
router.get('/:id', controller.getOrder)
router.post('/', controller.createOrder)
router.patch('/:id', controller.updateOrder)
router.delete('/:id', controller.deleteOrder)

module.exports = router