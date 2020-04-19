const controller = require('../controllers/product')
const express = require('express')
const multer = require('multer')
const router = express.Router()

//storage for images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    }
  });
const upload = multer({
    storage: storage,
});


//CRUD endpoints
router.get('/', controller.getProducts)
router.get('/:id', controller.getProduct)
router.post('/', upload.single('image'), controller.createProduct)
router.patch('/:id', controller.updateProduct)
router.delete('/:id', controller.deleteProduct)

module.exports = router

