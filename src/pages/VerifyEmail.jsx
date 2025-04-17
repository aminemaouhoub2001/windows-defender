import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    const verify = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/verify-email?token=${token}`);
        const data = await res.json();

        if (res.ok) {
          setStatus('✅ Email verified! Redirecting to login...');
          setTimeout(() => navigate('/login'), 2500);
        } else {
          setStatus(`❌ ${data.error}`);
        }
      } catch (err) {
        setStatus('❌ Verification failed. Please try again.');
      }
    };

    verify();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
      <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-md text-center w-full max-w-md">
        <div className="text-3xl mb-4">📬</div>
        <p className="text-lg">{status}</p>
      </div>
    </div>
  );
}
