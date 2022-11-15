const express = require('express')

const router = express.Router()

//GET all weather data
router.get('/', (req, res) => {
    res.json({mssg: 'GET all weather data'})
})

//GET a single piece of data
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET all single peace weather data'})
})

//POST new weather data
router.post('/', (req, res) => {
    res.json({mssg: 'POST new weather data'})
})

//DELETE some weather data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE weather data'})
})

//UPDATE weather data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE weather data'})
})

module.exports = router