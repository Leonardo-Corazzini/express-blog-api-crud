const posts = require('../data/posts.js')

function index(req, res) {

    let allCategory = []

    posts.forEach(post => {
        !allCategory.includes(post.category) && allCategory.push(post.category)
    });

    res.json(allCategory)

}

module.exports = { index }