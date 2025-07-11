const express = require('express');
const router = express.Router();

// Dummy data - replace with DB later
const messages = [
  { email: 'user1@example.com', message: 'Loved the recipes!' },
  { email: 'user2@example.com', message: 'Please add more vegetarian dishes.' }
];

router.get('/messages', (req, res) => {
  res.json(messages);
});

module.exports = router;
