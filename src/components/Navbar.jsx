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

      {/* Navigation Links + CTA Buttons */}
      <div className="flex items-center space-x-6 text-sm">
        <Link to="/generator" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/techniques" className="hover:text-cyan-400 transition">Techniques</Link>
        <Link to="/resources" className="hover:text-cyan-400 transition">Resources</Link>
        <a href="https://github.com/aminemaouhoub2001/windows-defender" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1C5.925 1 1 5.925 1 12a10.996 10.996 0 008.364 10.677c.612.113.836-.266.836-.59 0-.292-.011-1.066-.017-2.094-3.405.739-4.125-1.642-4.125-1.642-.557-1.413-1.362-1.789-1.362-1.789-1.114-.76.084-.745.084-.745 1.23.087 1.878 1.263 1.878 1.263 1.094 1.873 2.87 1.332 3.567 1.019.111-.792.428-1.332.78-1.638-2.72-.31-5.579-1.36-5.579-6.048 0-1.336.478-2.428 1.262-3.282-.127-.312-.547-1.565.12-3.262 0 0 1.025-.328 3.36 1.252A11.685 11.685 0 0112 6.844c1.04.005 2.087.14 3.066.412 2.331-1.58 3.354-1.252 3.354-1.252.669 1.697.25 2.95.123 3.262.787.854 1.26 1.946 1.26 3.282 0 4.698-2.863 5.735-5.59 6.038.439.378.831 1.125.831 2.266 0 1.636-.015 2.955-.015 3.354 0 .328.22.71.842.589A11.004 11.004 0 0023 12c0-6.075-4.925-11-11-11z" /></svg>
          GitHub
        </a>

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
          to="/community"
          className="px-4 py-1 border border-cyan-400 text-white rounded hover:bg-cyan-400 hover:text-black transition duration-300"
        >
          Join Community
        </Link>
      </div>
    </nav>
  );
}
