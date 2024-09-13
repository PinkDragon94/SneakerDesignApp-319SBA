// models/design.js
const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  sneakerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sneaker', required: true },
  designName: { type: String, required: true },
  pattern: { type: String, required: true },
  colorScheme: { type: [String], required: true },
});

designSchema.index({ sneakerId: 1 }); // Example index

module.exports = mongoose.model('Design', designSchema);
