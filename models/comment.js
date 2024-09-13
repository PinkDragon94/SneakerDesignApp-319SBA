// models/comment.js
const mongoose = require('mongoose');

// Define the schema for a comment
const commentSchema = new mongoose.Schema({
  // Reference to the user who made the comment
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Reference to the sneaker the comment is associated with
  sneakerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sneaker', required: true },
  
  // The text content of the comment
  content: { type: String, required: true },
  
  // Timestamp for when the comment was created
  createdAt: { type: Date, default: Date.now },
  
  // Optional: Timestamp for when the comment was last updated
  updatedAt: { type: Date, default: Date.now }
});

// Optionally add an index for faster queries on the `sneakerId`
commentSchema.index({ sneakerId: 1 });

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
