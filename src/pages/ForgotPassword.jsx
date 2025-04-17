import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgot = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) return setMessage(data.error || 'Error sending email');
      setMessage('✅ Reset link sent to your email');
    } catch {
      setMessage('❌ Server error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
      <div className="bg-[#1a1a1a] p-6 rounded shadow w-full max-w-sm text-center">
        <h1 className="text-lg font-bold mb-4">Forgot Password</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-4 py-2 mb-4 rounded bg-black text-white border border-gray-600"
        />
        <button
          onClick={handleForgot}
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 rounded"
        >
          Send Reset Link
        </button>
        {message && <p className="text-sm text-red-400 mt-4">{message}</p>}
      </div>
    </div>
  );
}
