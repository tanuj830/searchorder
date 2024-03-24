const mongoose = require("mongoose");

const Order = mongoose.Schema({
  model: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  deliveryCharge: {
    type: String,
    required: false,
  },
  discount: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  qty: {
    type: Number,
    required: false,
  },
  orderedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", Order);
