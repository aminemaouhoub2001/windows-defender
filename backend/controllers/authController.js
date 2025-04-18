const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../mailer');

const SECRET = process.env.JWT_SECRET;

// ✅ Helper: Email Validator
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 🔐 SIGNUP
exports.signup = async (req, res) => {
  const { full_name, email, password } = req.body;

  if (!full_name || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  if (!isValidEmail(email))
    return res.status(400).json({ error: 'Invalid email format' });

  try {
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0)
      return res.status(400).json({ error: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (full_name, email, password, created_at, is_verified)
       VALUES ($1, $2, $3, NOW(), false) RETURNING id`,
      [full_name, email, hashed]
    );

    const token = jwt.sign({ id: result.rows[0].id }, SECRET, { expiresIn: '15m' });
    await sendVerificationEmail(email, token);

    res.status(201).json({ message: '✅ Account created! Please check your email to verify.' });
  } catch (error) {
    console.error("❌ Signup Error:", error);
    res.status(500).json({ error: '❌ Signup failed', details: error.message });
  }
};

// 📩 VERIFY EMAIL
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, SECRET);
    await pool.query('UPDATE users SET is_verified = true WHERE id = $1', [decoded.id]);
    res.send('<h2 style="color: green;">✅ Your email has been verified. You can now login.</h2>');
  } catch (err) {
    res.status(400).send('<h2 style="color: red;">❌ Invalid or expired verification link</h2>');
  }
};

// 🔓 SIGNIN
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password are required' });

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) return res.status(401).json({ error: 'User not found' });

    if (!user.is_verified)
      return res.status(403).json({ error: 'Please verify your email before signing in.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Signin failed', details: error.message });
  }
};

// 🔁 FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ error: 'Email not found' });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '15m' });
    const baseUrl = process.env.CLIENT_URL || 'https://windowsdefenderbypasscom.quest';
    const link = `${baseUrl}/reset-password?token=${token}`;


    await sendVerificationEmail(email, token, link);

    res.json({ message: '🔁 Reset link sent to your email.' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending reset link', details: error.message });
  }
};

// 🔒 RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, SECRET);
    const hashed = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, decoded.id]);
    res.json({ message: '🔐 Password updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid or expired token' });
  }
};
