import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Generating() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTechnique = location.state?.technique || 'Patch AMSI (API)';
  const projectName = location.state?.projectName || 'example-project';
  const format = location.state?.format || 'EXE';

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/result', {
              state: {
                technique: selectedTechnique,
                projectName,
                format,
                timestamp: new Date().toLocaleString(),
              },
            });
          }, 500);
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <nav className="flex justify-between items-center px-2 py-4 bg-black text-white">
        <div className="flex items-center space-x-2">
          <img src="/windows-defender.svg" alt="logo" className="h-6" />
          <span className="text-lg font-bold">Windows Defender Bypass</span>
        </div>
        <div className="space-x-6 text-sm">
          <a href="/generator" className="hover:text-cyan-400">Home</a>
          <a href="/login" className="hover:text-cyan-400">Logout</a>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 mt-10">Generating payload...</h2>

        <div className="relative w-32 h-32 mb-6">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
            <circle cx="50%" cy="50%" r="45%" stroke="#222" strokeWidth="8" fill="none" />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#00e0ff"
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 72}
              strokeDashoffset={2 * Math.PI * 72 * (1 - progress / 100)}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-cyan-400 text-2xl font-bold">
            {progress}%
          </div>
        </div>

        <div className="w-[280px] h-[6px] bg-[#1a1a1a] rounded-full mb-4">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-300 mb-6">
          Applying {selectedTechnique}...
        </p>

        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400 mt-2"></div>
      </main>
    </div>
  );
}
