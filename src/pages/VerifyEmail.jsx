import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verifying...');

  const BASE_URL = import.meta.env.VITE_API_URL; // يكون = https://windows-defender.onrender.com/api

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    const verify = async () => {
      try {
        const res = await fetch(`${BASE_URL}/verify-email?token=${token}`);
        const data = await res.text();

        if (res.ok) {
          setStatus(' Email verified! Redirecting to login...');
          setTimeout(() => navigate('/login'), 2500);
        } else {
          setStatus('❌ Verification failed or token expired.');
        }
      } catch (err) {
        setStatus('❌ Error connecting to server.');
      }
    };

    verify();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-md text-center w-full max-w-md">
        <div className="text-3xl mb-4">📬</div>
        <p className="text-lg">{status}</p>
      </div>
    </div>
  );
}
