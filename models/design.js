const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the design schema
const designSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',  // Reference to the User model
    required: true 
  },
  designName: { 
    type: String, 
    required: true 
  },
  pattern: { 
    type: String, 
    required: true 
  },
  colorScheme: { 
    type: [String],  // Array of strings for color schemes
    required: true 
  }
});

// Remove incorrect index on `sneakerId`
designSchema.index({ userId: 1 });  // Index on `userId` for faster queries by user

module.exports = mongoose.model('Design', designSchema);

