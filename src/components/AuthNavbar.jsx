import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-[#0f0f0f] text-white shadow-md">
      {/* Logo & Name */}
      <div className="flex items-center space-x-2">
        <img src="/windows-defender.svg" alt="logo" className="h-6" />
        <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Evasion <span className="font-bold">Techniques</span>
        </h1>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6 text-sm">
        <Link to="/generator" className="hover:text-cyan-400">Home</Link>
        <Link to="/techniques" className="hover:text-cyan-400">Techniques</Link>
        <Link to="/resources" className="hover:text-cyan-400">Resources</Link>
        <a href="https://github.com/aminemaouhoub2001/windows-defender" className="hover:text-cyan-400">GitHub</a>

        {/* Buttons */}
        <Link to="/login" className="px-3 py-1 border rounded hover:bg-gray-800">
          Sign In
        </Link>
        <button className="px-4 py-1 bg-transparent border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition duration-300">
          Join Community
        </button>
      </div>
    </nav>
  );
}
