require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// ✅ Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || '*', // باش يقبل الطلبات من Vercel
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('🚀 Backend is up and running from Render!');
});

// ❌ ما تديّرش إرسال إيميل فكل مرة كيدمارا فيها السيرفر
// sendVerificationEmail("tonEmail@gmail.com", "faketoken123");

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend API running on port ${PORT}`);
});
