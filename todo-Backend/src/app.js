const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

// Route setup
app.use('/api/auth', authRoutes); // Routes for authentication
app.use('/api/tasks', taskRoutes); // Routes for task management
app.use('/api/user', userRoutes); // Routes for user profile management

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Set the port from environment variables or use 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
