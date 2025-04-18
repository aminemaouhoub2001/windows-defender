import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-cyan-400">Mal</span>
          <span className="text-purple-500">ware </span>
          <span className="text-green-400">Evasion</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Techniques & <br className="md:hidden" /> Countermeasures
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Understand how malware evades detection and how to build more effective defenses.
          Educational content for cybersecurity professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/techniques"
            className="bg-cyan-400 text-black px-6 py-2 rounded shadow-lg hover:bg-cyan-300 transition duration-300"
          >
            Explore Techniques →
          </Link>
          <button className="px-6 py-2 border border-gray-600 rounded hover:bg-gray-800 transition duration-300">
            Why Learn This?
          </button>
        </div>
      </section>

      {/* About Project Section */}
      <section className="bg-[#101010] grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-20 px-8 md:px-16 border-t border-[#1f1f1f]">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Empowering Malware Bypass Innovation
          </h2>
          <p className="text-gray-400 mb-4">
            <span className="text-cyan-400 font-medium">Evasion Techniques</span> is an advanced security lab designed to simulate <strong>real-world evasion attacks</strong> like shellcode injection, DLL hijacking, and stealthy persistence via registry.
          </p>
          <p className="text-gray-400 mb-4">
            It helps red teamers and analysts to understand how Windows Defender and modern AV systems can be bypassed, all for ethical research & cybersecurity improvement.
          </p>
          <p className="text-green-400 font-medium flex items-center gap-2">
            <span className="text-cyan-400">⚙️</span> Built for red teaming, malware research, and education
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="border border-cyan-400 p-10 rounded-xl shadow-xl bg-[#0f0f0f] animate-pulse hover:animate-none">
            <img src="/windows-defender.svg" alt="defender logo" className="h-20 w-20 opacity-90 hover:scale-110 transition duration-300" />
          </div>
        </div>
      </section>

      {/* Techniques Cards */}
      <section className="bg-[#0a0a0a] text-white py-24 px-6 border-t border-[#1d1d1d]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Injection Techniques</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover powerful methods used to execute payloads stealthily in target systems by bypassing defenses and injecting code in memory, registry, or remote processes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Local Shell Injection */}
          <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
            <div className="text-cyan-400 text-3xl mb-3">🧪</div>
            <h3 className="text-xl font-semibold mb-2">Local Shell Injection</h3>
            <p className="text-gray-400 text-sm mb-4">
              Inject shellcode locally into the process memory to execute payloads silently.
            </p>
            <Link to="/techniques/local-shell" className="text-cyan-400 text-sm hover:underline">
              Learn more →
            </Link>
          </div>

          {/* Remote DLL Injection */}
          <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
            <div className="text-cyan-400 text-3xl mb-3">📦</div>
            <h3 className="text-xl font-semibold mb-2">Remote DLL Injection</h3>
            <p className="text-gray-400 text-sm mb-4">
              Inject a malicious DLL into a remote process using Windows API functions.
            </p>
            <Link to="/techniques/remote-dll" className="text-cyan-400 text-sm hover:underline">
              Learn more →
            </Link>
          </div>

          {/* Remote Shellcode Injection */}
          <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
            <div className="text-cyan-400 text-3xl mb-3">📡</div>
            <h3 className="text-xl font-semibold mb-2">Remote Shellcode Injection</h3>
            <p className="text-gray-400 text-sm mb-4">
              Send and execute shellcode directly in another process’s address space.
            </p>
            <Link to="/techniques/remote-shellcode" className="text-cyan-400 text-sm hover:underline">
              Learn more →
            </Link>
          </div>

          {/* Registry Injection */}
          <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
            <div className="text-cyan-400 text-3xl mb-3">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Registry Injection</h3>
            <p className="text-gray-400 text-sm mb-4">
              Achieve stealthy persistence by modifying Windows registry with payloads.
            </p>
            <Link to="/techniques/registry-injection" className="text-cyan-400 text-sm hover:underline">
              Learn more →
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/techniques"
            className="px-6 py-2 border border-cyan-400 rounded text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-lg shadow-cyan-800/30"
          >
            Explore All Techniques
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Evasion Techniques. All rights reserved.
      </footer>
    </div>
  );
}
