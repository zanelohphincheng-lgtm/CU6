const express = require('express')
const router = express.Router()
const tvShowController = require('../controllers/TVShowController')

router.use(express.json())

router.get('/', tvShowController.showAllTVShows)
router.get('/:id', tvShowController.showTVShowByID)
router.post('/', tvShowController.addTVShow)
router.put('/:id', tvShowController.updateTVShow)
router.delete('/:id', tvShowController.removeTVShow)

module.exports= router