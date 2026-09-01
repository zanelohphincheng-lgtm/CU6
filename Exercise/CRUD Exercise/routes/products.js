const express = require('express')
const router = express.Router()
const controller = require('../controllers/productsControllers')

router.use(express.json())

router.get('/getAllProducts', controller.getAllProducts)
router.get('/getOneProduct/:id', controller.getOneProduct)
router.post('/addNewProduct', controller.addNewProduct)
router.put('/updateProductName/:id', controller.updateProductName)
// .put is what we use for UPDATE and replace
// .patch can also be an update but MORE LIKE MODIFY
// The difference is that 
router.delete('/removeProduct/:id', controller.removeProduct)

module.exports = router