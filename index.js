require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(compression()); // Gzip compression
app.use(morgan('combined')); // Logging
app.use(express.json()); // JSON parsing

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Production-ready Node.js app in a single file 🚀' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
