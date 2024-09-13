// routes/sneakers.js
const express = require('express');
const router = express.Router();
const Sneaker = require('../models/sneaker');

// GET all sneakers
router.get('/', async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.json(sneakers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new sneaker
router.post('/', async (req, res) => {
  const sneaker = new Sneaker(req.body);
  try {
    const newSneaker = await sneaker.save();
    res.status(201).json(newSneaker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a sneaker
router.delete('/:id', async (req, res) => {
  try {
    const sneaker = await Sneaker.findByIdAndDelete(req.params.id);
    if (sneaker) {
      res.json({ message: 'Sneaker deleted' });
    } else {
      res.status(404).json({ message: 'Sneaker not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
