const {model} = require("mongoose");

const {HoldingsSchema,positionSchema,orderSchema} = require("../schemas/AllSchemas");

const HoldingsModel = new model("holding",HoldingsSchema);
const positionModel = new model("position",positionSchema);
const orderModel = new model("order",orderSchema);
module.exports = {HoldingsModel,positionModel,orderModel};