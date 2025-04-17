import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = async () => {
    setError('');
    setSuccess('');

    if (!fullName || !email || !password) {
      setError('⚠️ All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('⚠️ Invalid email format.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: fullName, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || '❌ Signup failed.');
        return;
      }

      setSuccess('✅ Account created! Please check your email to verify.');
      setFullName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('❌ Network error:', err);
      setError('❌ Unable to connect to server.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <div className="flex justify-between items-center px-2 py-4 bg-black">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/windows-defender.svg" alt="logo" className="h-6" />
          <span className="text-lg font-bold">Windows Defender Bypass</span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="bg-[#1f2937] text-white px-4 py-1 rounded hover:bg-[#374151] transition"
        >
          Sign in
        </button>
      </div>

      {/* Signup Form */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-[#1a1a1a] rounded-xl shadow-md p-8 text-center">
          <div className="text-cyan-400 text-4xl mb-6">🛡️</div>
          <h1 className="text-2xl font-bold mb-6">Create your account</h1>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {success && (
            <div className="text-green-500 text-sm mb-4">
              ✅ Account created! Please check your email to verify.
              <br />
              <span className="text-gray-300 text-xs">
                Didn’t receive it? Check your spam folder.
              </span>
            </div>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-black border border-gray-600 w-full px-4 py-2 mb-4 rounded text-sm text-white placeholder-gray-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-600 w-full px-4 py-2 mb-4 rounded text-sm text-white placeholder-gray-400"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border border-gray-600 w-full px-4 py-2 rounded text-sm text-white placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-sm"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <button
            onClick={handleSignup}
            className="bg-cyan-400 hover:bg-cyan-500 text-black w-full py-2 rounded font-semibold transition"
          >
            Create Account
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-cyan-400 underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
