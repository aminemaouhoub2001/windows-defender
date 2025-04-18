require('dotenv').config();               // ✔️ تحميل .env
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || '*',  // ✔️ قبول الطلبات من Vercel
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);              // ✔️ Routes تحت /api

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('🚀 Backend is up and running from Render!');
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend API running on port ${PORT}`);
});
