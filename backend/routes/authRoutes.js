// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup
router.post('/signup', authController.signup);

// Email verification
router.get('/verify-email', authController.verifyEmail);

// Signin
router.post('/signin', authController.signin);

// Forgot Password
router.post('/forgot-password', authController.forgotPassword);

// Reset Password
router.post('/reset-password', authController.resetPassword);

module.exports = router;
