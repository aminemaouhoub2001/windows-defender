import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [params] = useSearchParams();

  const handleReset = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: params.get('token'),
          newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) return setMessage(data.error || 'Error resetting password');
      setMessage('✅ Password reset successfully. You can now log in.');
    } catch {
      setMessage('❌ Server error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
      <div className="bg-[#1a1a1a] p-6 rounded shadow w-full max-w-sm text-center">
        <h1 className="text-lg font-bold mb-4">Reset Password</h1>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
          className="w-full px-4 py-2 mb-4 rounded bg-black text-white border border-gray-600"
        />
        <button
          onClick={handleReset}
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 rounded"
        >
          Reset Password
        </button>
        {message && <p className="text-sm mt-4 text-red-400">{message}</p>}
      </div>
    </div>
  );
}
