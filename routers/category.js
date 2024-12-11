const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController.js')

// CRUD 
// index
router.get('/', categoryController.index)


module.exports = router
