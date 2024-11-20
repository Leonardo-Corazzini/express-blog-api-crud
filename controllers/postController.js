const posts = require('../data/posts.js')

function index(req, res) {
	console.log("Lista dei post")
	res.json(posts)

	
}

function show(req, res) {
	const id = parseInt(req.params.id)
	console.log(`Post con id: ${id}`)

	const post = posts.find((p) => p.id === id)

	res.json(post)
}

function store(req, res) {
    console.log('Creo un nuovo post.')
	res.send('Creo un nuovo post.')
}

function update(req, res) {
	const id = req.params.id
    console.log(`Aggiorno il post con id: ${id}`)
	res.send(`Aggiorno il post con id: ${id}`)
}

function modify(req, res) {
    const id = req.params.id
    console.log(`Modifico il post con id: ${id}`)
	res.send(`Modifico il post con id: ${id}`)
}	

function destroy(req, res) {
    const id = req.params.id
    console.log(`Elimino il post con id: ${id}`)
	res.send(`Elimino il post con id: ${id}`)

	
}

module.exports = { index, show, store, update, modify, destroy }
