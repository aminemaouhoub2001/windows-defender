import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = new URLSearchParams(window.location.search).get('token');

  const handleReset = async () => {
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`${BASE_URL}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error resetting password.');
        return;
      }

      setSuccess('✅ Password updated successfully.');
    } catch (err) {
      setError('❌ Server error.');
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center bg-black">
      <h2 className="text-2xl mb-4">Reset Password</h2>

      {success && (
        <div>
          <p className="text-green-400 mb-2">{success}</p>
          <button onClick={() => navigate('/login')} className="underline text-cyan-400">
            Retour à la connexion
          </button>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="password"
        placeholder="New password"
        className="bg-gray-800 px-4 py-2 mb-4 rounded"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button
        onClick={handleReset}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Confirm Password
      </button>
    </div>
  );
}
