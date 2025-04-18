import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-2 py-4 bg-black">
        <div className="flex items-center space-x-2">
        <img src="/windows-defender.svg" alt="logo" className="h-6" />
          <span className="text-lg font-bold">Windows Defender Bypass</span>
        </div>
        <div className="space-x-6">
          <button onClick={() => navigate('/generator')} className="hover:text-cyan-400">Home</button>
          <button onClick={() => navigate('/history')} className="hover:text-cyan-400">History</button>
          <button onClick={() => navigate('/login')} className="hover:text-red-400">Logout</button>
        </div>
      </div>

      {/* Result Content */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400"> Payload Generated Successfully!</h2>
        <p className="text-gray-300 mb-6">Your undetectable payload is now ready.</p>

        {/* Fake Download Result (to be improved later) */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <p className="text-white text-sm mb-2">Project Name: <strong>example-project</strong></p>
          <p className="text-white text-sm mb-2">Format: <strong>EXE</strong></p>
          <p className="text-white text-sm mb-2">Technique: <strong>Patch AMSI (API)</strong></p>
          <p className="text-white text-sm mb-6">Generated on: <strong>{new Date().toLocaleString()}</strong></p>

          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-2 rounded">
            Download Payload
          </button>
        </div>
      </div>
    </div>
  );
}
