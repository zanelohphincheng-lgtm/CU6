const express = require('express')
const router = express.Router()
const jsonController = require('../controllers/jsonController')

router.use(express.json())

router.post('/getAllCharacters', jsonController.getAllCharacters)
router.post('/getCharacter/:id', jsonController.getCharacterById)

module.exports = router