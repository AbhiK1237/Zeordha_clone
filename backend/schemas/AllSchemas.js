const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
})
const positionSchema = new Schema({
    product:String,
    name: String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

const orderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String, 
})

module.exports = {HoldingsSchema,positionSchema,orderSchema};