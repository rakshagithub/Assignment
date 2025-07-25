// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post('/greet', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  res.json({ message: `Hello ${name}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
