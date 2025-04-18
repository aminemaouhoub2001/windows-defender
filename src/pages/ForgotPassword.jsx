import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleSendLink = async () => {
    setError('');
    setMessage('');

    try {
      const res = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }

      setMessage('📩 Password reset link sent! Check your email.');
    } catch (err) {
      setError('❌ Server error.');
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center bg-black">
      <h2 className="text-2xl mb-4">Forgot Password</h2>

      {message && <p className="text-green-400">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="Enter your email"
        className="bg-gray-800 px-4 py-2 mb-4 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleSendLink}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Send Reset Link
      </button>
    </div>
  );
}
