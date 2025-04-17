const pool = require('../db');

exports.findByEmail = (email) => pool.query('SELECT * FROM users WHERE email = $1', [email]);

exports.createUser = (full_name, email, hashed) =>
  pool.query(
    'INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id',
    [full_name, email, hashed]
  );

exports.verifyUser = (id) => pool.query('UPDATE users SET is_verified = TRUE WHERE id = $1', [id]);

exports.updatePassword = (id, hashed) =>
  pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, id]);
