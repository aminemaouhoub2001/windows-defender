import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function AuthNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-black text-white">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
      <img src={import.meta.env.BASE_URL + 'windows-defender.svg'} alt="logo" className="h-6" />

        <span className="text-lg font-bold">Windows Defender </span>
      </div>

      {/* Signup Button */}
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
