import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icons (npm install lucide-react)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f0f0f] text-white border-b border-[#1d1d1d] shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/windows-defender.svg" alt="logo" className="h-6" />
          <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            MMI <span className="font-bold">Evader</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-cyan-400 font-semibold underline' : 'hover:text-cyan-400 transition'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/techniques"
            className={({ isActive }) =>
              isActive ? 'text-cyan-400 font-semibold underline' : 'hover:text-cyan-400 transition'
            }
          >
            Techniques
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? 'text-cyan-400 font-semibold underline' : 'hover:text-cyan-400 transition'
            }
          >
            Resources
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-4 py-1 rounded ring-1 ring-cyan-400 ring-offset-2 shadow-lg shadow-cyan-500/30 transition ${
                isActive
                  ? 'bg-cyan-400 text-black'
                  : 'hover:bg-cyan-400 hover:text-black text-white'
              }`
            }
          >
            Sign In
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-start space-y-2 px-4 text-sm">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            Home
          </NavLink>
          <NavLink to="/techniques" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            Techniques
          </NavLink>
          <NavLink to="/resources" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
            Resources
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="px-4 py-1 rounded ring-1 ring-cyan-400 shadow shadow-cyan-500/30 hover:bg-cyan-400 hover:text-black"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
