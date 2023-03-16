const mongoose = require('mongoose')
const Productmodels = new mongoose.Schema({
    name: String,
    imgUrl: String,
    quantity: Number,
    panier: Boolean
})
module.exports = mongoose.model("product", Productmodels)