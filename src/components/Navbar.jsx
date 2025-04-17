import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulation de logout (tu peux ajouter des hooks auth plus tard)
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center px-2 py-4 bg-black text-white">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/windows-defender.svg" alt="logo" className="h-6" />
        <span className="text-lg font-bold">Windows Defender Bypass</span>
      </div>
      <div className="space-x-6">
        <a href="/generator" className="hover:text-cyan-400">Home</a>
        <a href="/generator" className="hover:text-cyan-400">Generator</a>
        <a href="#" className="hover:text-cyan-400">Techniques</a>
        <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
      </div>
    </nav>
  );
}
