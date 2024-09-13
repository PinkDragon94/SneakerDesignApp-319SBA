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
    res.status(500).json({ message: err.message });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const { userId, sneakerId, content } = req.body;
  const comment = new Comment({
    userId,
    sneakerId,
    content
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a comment by ID
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (comment) {
      res.json({ message: 'Comment deleted' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
