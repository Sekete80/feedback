const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Create feedback
router.post('/', async (req, res) => {
  try {
    const { studentName, courseCode, comments, rating } = req.body;
    if (!studentName || !courseCode || !rating) {
      return res.status(400).json({ error: 'studentName, courseCode and rating are required.' });
    }
    const fb = await Feedback.create({ studentName, courseCode, comments, rating });
    res.status(201).json(fb);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({ order: [['createdAt','DESC']] });
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
