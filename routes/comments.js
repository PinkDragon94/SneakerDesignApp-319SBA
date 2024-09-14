// routes/comments.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET all comments for a specific sneaker
router.get('/:sneakerId', async (req, res) => {
  try {
    const comments = await Comment.find({ sneakerId: req.params.sneakerId }).populate('userId', 'username');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments', error: err.message });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const { userId, sneakerId, content } = req.body;

  // Validate input
  if (!userId || !sneakerId || !content) {
    return res.status(400).json({ message: 'All fields (userId, sneakerId, content) are required' });
  }

  const comment = new Comment({
    userId,
    sneakerId,
    content
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create comment', error: err.message });
  }
});

// DELETE a comment by ID
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete comment', error: err.message });
  }
});

module.exports = router;
