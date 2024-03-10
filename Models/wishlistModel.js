const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        requied: true
    },
    price: {
        type: Number,
        requied: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    },
    userId: {
        type: String,
        requied: true
    }
})

const wishlists = mongoose.model('wishlists', wishlistSchema)

module.exports = wishlists