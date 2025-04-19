import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md text-white bg-[#0f0f0f] bg-[url('/dot-grid.svg')] bg-repeat bg-center border-b border-[#1d1d1d]">
      {/* Logo + Gradient Title */}
      <div className="flex items-center space-x-2">
        <img src="/windows-defender.svg" alt="logo" className="h-6" />
        <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Evasion <span className="font-bold">Techniques</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-semibold underline transition'
              : 'hover:text-cyan-400 transition'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/techniques"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-semibold underline transition'
              : 'hover:text-cyan-400 transition'
          }
        >
          Techniques
        </NavLink>

        <NavLink
          to="/resources"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-400 font-semibold underline transition'
              : 'hover:text-cyan-400 transition'
          }
        >
          Resources
        </NavLink>

        {/* Auth Buttons */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-3 py-1 border rounded transition ${
              isActive ? 'bg-gray-800 border-cyan-400' : 'hover:bg-gray-800'
            }`
          }
        >
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l4-4m0 0l-4-4m4 4H3" />
            </svg>
            Sign In
          </span>
        </NavLink>

        <NavLink
  to="/signup"
  className={({ isActive }) =>
    `px-4 py-1 rounded transition duration-300 ring-1 ring-cyan-400 ring-offset-2 shadow-lg shadow-cyan-500/30 ${
      isActive
        ? 'bg-cyan-400 text-black'
        : 'hover:bg-cyan-400 hover:text-black text-white'
    }`
  }
>
  Sign Up
</NavLink>

      </div>
    </nav>
  );
}
