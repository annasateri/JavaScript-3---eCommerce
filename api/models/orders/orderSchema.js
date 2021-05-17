const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },

    cart: { type: Array },
    totalPrice: { type: Number },

    createdAt: { type: Date, default: Date.now() },
    delivered: {type: Boolean, default: false }
})

module.exports = mongodb.model('order', orderSchema);