import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-2 py-4 bg-black text-white">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/windows-defender.svg" alt="🛡️" className="h-6" />
        <span className="text-lg font-bold">Windows Defender Bypass</span>
      </div>
      <div>
        <button
          onClick={() => navigate('/signup')}
          className="bg-[#1f2937] text-white text-sm px-4 py-1 rounded hover:bg-[#374151] transition"
        >
          Create account
        </button>
      </div>
    </nav>
  );
}
