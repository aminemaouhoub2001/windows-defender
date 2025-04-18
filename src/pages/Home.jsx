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
          <button
            className="px-6 py-2 border border-gray-600 rounded hover:bg-gray-800 transition duration-300"
          >
            Why Learn This?
          </button>
        </div>
      </section>

      {/* Empowering Section with Glowing Animation */}
      <section className="bg-[#0d0d0d] grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-24 px-8 md:px-16 border-t border-[#1a1a1a]">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Empowering Malware Bypass Innovation
          </h2>
          <p className="text-gray-400 mb-4">
            Our project <span className="text-cyan-400 font-medium">Evasion Techniques</span> is a smart platform that helps professionals and researchers understand, test, and simulate advanced <strong>Windows Defender bypass techniques</strong>.
          </p>
          <p className="text-gray-400 mb-4">
            Built with cutting-edge web technology, our platform allows users to generate custom payloads and explore evasion strategies through an intuitive and professional interface.
          </p>
          <p className="text-green-400 font-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1m8-8h-1m-14 0H4m16.24 7.76l-.707-.707M6.343 6.343l-.707-.707M17.657 6.343l-.707.707M6.343 17.657l-.707.707" />
            </svg>
            Built for ethical research & red teaming
          </p>
        </div>

        {/* Right Glowing Card */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Glowing Box */}
            <div className="w-56 h-56 bg-[#101010] border border-cyan-400 rounded-xl flex justify-center items-center transition duration-500 group-hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.4)]">
              <img src="/windows-defender.svg" alt="defender logo" className="h-20 w-20 opacity-80 group-hover:scale-110 transition duration-300" />
            </div>
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-cyan-400 transition duration-700 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Evasion Techniques. All rights reserved.
      </footer>
    </div>
  );
}
