// routes/design.js
const express = require('express');
const router = express.Router();
const Design = require('../models/design');

// GET all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new sneaker
router.post('/', async (req, res) => {
  const design = new Design(req.body);
  try {
    const newDesign = await design.save();
    res.status(201).json(newDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a sneaker
router.delete('/:id', async (req, res) => {
  try {
    const design = await design.findByIdAndDelete(req.params.id);
    if (design) {
      res.json({ message: 'Design deleted' });
    } else {
      res.status(404).json({ message: 'Design not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;