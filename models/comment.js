const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the comment schema
const commentSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',  // Reference to the User model
    required: true 
  },
  sneakerId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Sneaker',  // Reference to the Sneaker model
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Add an index to optimize queries on `sneakerId`
commentSchema.index({ sneakerId: 1 });

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
