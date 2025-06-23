const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Simple route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

console.log(`Starting portfolio server on port ${port}...`);
app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});