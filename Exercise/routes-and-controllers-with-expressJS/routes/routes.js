const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.use(express.json())

router.get('/books', controller.getAllBooks)
router.get('/books/:id', controller.booksById)

router.get('/reviews', controller.getAllReviews)
router.get('/reviews/:id', controller.reviewsById)

router.get('/authors', controller.getAllAuthors)
router.get('/authors/:id', controller.authorsById)

module.exports = router