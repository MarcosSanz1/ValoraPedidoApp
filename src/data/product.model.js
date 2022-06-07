const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    name: '',
    price: 1,
    shop: '',
    image: '',
    totalRate: 2,
    send: false,
    valorations: [
        {
            rate: 1.5,
            comment: ''
        }
    ]
})

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel