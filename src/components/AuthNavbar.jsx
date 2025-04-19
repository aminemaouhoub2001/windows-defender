import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNavbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md text-white bg-[#0f0f0f] bg-[url('/dot-grid.svg')] bg-repeat bg-center border-b border-[#1d1d1d]">
      {/* Logo + Gradient Title */}
      <div className="flex items-center space-x-2">
        <img src="/windows-defender.svg" alt="logo" className="h-6" />
        <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          MMI <span className="font-bold">Evader</span>
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

        {/* ✅ Sign Up uniquement */}
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
