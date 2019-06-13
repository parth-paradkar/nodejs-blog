const mongoose = require('mongoose')

const post = new mongoose.Schema({
    title: {
        type: String,
        required: "Post title is required"
    },
    author: {
        type: String,
        required: "Author name is required"
    },
    content: {
        type: String
    },
    date: {
        type: String
    }
},
{
    collection: 'posts'
}
)

module.exports = mongoose.model('Post', post)