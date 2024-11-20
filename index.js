const express = require('express')
const posts = require('./data/posts.js')
const postsRouter = require('./routers/posts.js')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    console.log(req.query.limit);
    res.json({
        result: posts.slice(0,req.query.limit),
        count: posts.length,
    })
})
app.use('/posts', postsRouter)
app.listen(port, () => {
console.log(port)
})