// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // 🔍 Logging

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ✅ Import Routes
const authRoutes = require('./routes/authRoutes');
const { sendVerificationEmail } = require('./mailer');

// ✅ Routes
app.use('/api', authRoutes);

// ✅ Test route (optional)
app.get('/', (req, res) => {
  res.send('🚀 Backend is up and running!');
});

// ✅ Test manual email send (for development only!)
sendVerificationEmail("tonEmail@gmail.com", "faketoken123");

// ✅ Server launch
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend API running at http://localhost:${PORT}`);
});
