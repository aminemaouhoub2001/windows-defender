import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // ✅ استدعاء الـ Navbar الجديد

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const BASE_URL = 'https://windows-defender.onrender.com/api';

  const handleLogin = async () => {
    setError('');

    if (!email || !password) {
      setError('⚠️ Email and password are required.');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === 'Please verify your email before signing in.') {
          setError('📩 Please verify your email before logging in. Check your inbox.');
        } else {
          setError(data.error || '❌ Login failed.');
        }
        return;
      }

      // localStorage.setItem('token', data.token);
      navigate('/generator');
    } catch (err) {
      setError('❌ Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar /> {/* ✅ استبدلنا الـ Navbar القديم بالجديد */}

      {/* Login Card */}
      <div className="flex items-center justify-center mt-12 px-4">
        <div className="w-full max-w-md bg-[#1a1a1a] rounded-xl shadow-md p-8 text-center">
          <div className="text-cyan-400 text-4xl mb-6">🛡️</div>
          <h1 className="text-xl font-bold mb-6">Ready to bypass Windows Defender?</h1>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Social Logins */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-600 text-white py-2 rounded mb-3 hover:bg-gray-800 transition">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-600 text-white py-2 rounded mb-3 hover:bg-gray-800 transition">
            <img src="https://img.icons8.com/color/24/facebook.png" alt="Facebook" />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-600 text-white py-2 rounded mb-6 hover:bg-gray-800 transition">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="Apple" />
            Continue with Apple
          </button>

          {/* Email */}
          <input
            type="email"
            placeholder="me@mycompany.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-600 w-full px-4 py-2 rounded text-sm text-white placeholder-gray-400 mb-4"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border border-gray-600 w-full px-4 py-2 pr-10 rounded text-sm text-white placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Sign in */}
          <button
            onClick={handleLogin}
            className="bg-[#333] text-white w-full py-2 rounded hover:bg-[#444] transition mb-2"
          >
            Sign in
          </button>

          {/* Resend if not verified */}
          {error.includes('verify your email') && (
            <p className="text-xs text-gray-400 mt-2">
              Didn’t receive verification email?{' '}
              <a href="/resend" className="underline text-cyan-400">Resend</a>
            </p>
          )}

          {/* Footer */}
          <div className="text-sm text-gray-400 mt-4">
            <Link to="/forgot-password" className="underline hover:text-white block mb-2">
              Forgot your password?
            </Link>
            <span>
              Don’t have an account?{' '}
              <a href="/signup" className="underline text-cyan-400 hover:text-white">
                Sign up for Bypass
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
