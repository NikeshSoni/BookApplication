const express = require('express');
const router = express.Router();
const User = require('../models/model');

// router.post('/register', async (req, res) => {
//    const { bookName, category, author , rentPerDay } = req.body;
//    const newUser = new User({ bookName, category, author , rentPerDay });
//    await newUser.save();
//    res.json({ message: 'User registered successfully' });
// });

router.get('/', async (req, res) => {
   try {
      const books = await User.find(); // Fetch all books from the database
      res.json(books);  // Send back as JSON
      console.log(books);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

module.exports = router;
