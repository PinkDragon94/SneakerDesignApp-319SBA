// models/sneaker.js
const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
});

sneakerSchema.index({ name: 1, brand: 1 }); // Example index

module.exports = mongoose.model('Sneaker', sneakerSchema);
