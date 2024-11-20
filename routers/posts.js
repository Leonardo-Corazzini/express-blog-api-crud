const express = require('express')
const router = express.Router()
const posts = require('../data/posts.js')

// CRUD 
// index
router.get('/', (req, res) => {
	console.log("Lista dei post")
	res.json(posts)
})

// show
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id)
	console.log(`Post con id: ${id}`)

	const post = posts.find((p) => p.id === id)

	res.json(post)
})

// store
router.post('/', (req, res) => {
    console.log('Creo un nuovo post.')
	res.send('Creo un nuovo post.')
})

// update
router.put('/:id', (req, res) => {
	const id = req.params.id
    console.log(`Aggiorno il post con id: ${id}`)
	res.send(`Aggiorno il post con id: ${id}`)
})

// modify
router.patch('/:id', (req, res) => {
	const id = req.params.id
    console.log(`Modifico il post con id: ${id}`)
	res.send(`Modifico il post con id: ${id}`)
})

// destroy
router.delete('/:id', (req, res) => {
	const id = req.params.id
    console.log(`Elimino il post con id: ${id}`)
	res.send(`Elimino il post con id: ${id}`)
})

module.exports = router
