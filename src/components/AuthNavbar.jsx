import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/windows-defender.svg'; // ✅ المسار الصحيح

export default function AuthNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-black text-white">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-6 w-auto" />
        <span className="text-lg font-bold">Windows Defender Bypass</span>
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
