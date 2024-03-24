const mongoose = require("mongoose");

const Customer = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  orders: {
    type: Array,
    required: false,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customer", Customer);
