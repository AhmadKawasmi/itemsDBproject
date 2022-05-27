const mongoose = require('mongoose')


const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    quantity: Number,
})