import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#0f0f0f] shadow-md text-white">
      {/* Logo + Gradient Title */}
      <div className="flex items-center space-x-2">
        <img src="/windows-defender.svg" alt="logo" className="h-6" />
        <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Evasion <span className="font-bold">Techniques</span>
        </h1>
      </div>

      {/* Navigation Links + Buttons */}
      <div className="flex items-center space-x-6 text-sm">
        <Link to="/generator" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/techniques" className="hover:text-cyan-400 transition">Techniques</Link>
        <Link to="/resources" className="hover:text-cyan-400 transition">Resources</Link>

        {/* Auth Buttons */}
        <Link to="/login" className="px-3 py-1 border rounded hover:bg-gray-800 transition">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l4-4m0 0l-4-4m4 4H3" />
            </svg>
            Sign In
          </span>
        </Link>

        <Link
          to="/signup"
          className="px-4 py-1 border border-cyan-400 text-white rounded hover:bg-cyan-400 hover:text-black transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
