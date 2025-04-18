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

      {/* About Project Section with Mesh Background */}
      <section className="relative bg-[#0e0e0e] py-20 px-6 md:px-16 border-t border-[#1a1a1a] overflow-hidden">
        {/* Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Empowering <span className="text-cyan-400">Malware Bypass</span> Innovation
            </h2>
            <p className="text-gray-400 mb-4">
              Our project <span className="text-cyan-400 font-medium">Evasion Techniques</span> is a smart platform that helps professionals and researchers
              understand, test, and simulate advanced <strong>Windows Defender bypass techniques</strong>.
            </p>
            <p className="text-gray-400 mb-4">
              Built with cutting-edge web technology, our platform allows users to generate custom payloads
              and explore evasion strategies through an intuitive and professional interface.
            </p>
            <p className="text-green-400 font-medium flex items-center gap-2 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1m8-8h-1M5 12H4m16.24 7.76l-.707-.707M6.343 6.343l-.707-.707M17.657 6.343l-.707.707M6.343 17.657l-.707.707" />
              </svg>
              Built for ethical research & red teaming
            </p>
          </div>

          {/* Right Icon */}
          <div className="flex justify-center items-center">
            <div className="border border-cyan-400 p-10 rounded-xl shadow-lg bg-[#111111]">
              <img src="/windows-defender.svg" alt="defender logo" className="h-16 w-16 opacity-80" />
            </div>
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
