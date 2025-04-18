import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Navbar déjà stylée

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

      {/* Footer Optional */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Evasion Techniques. All rights reserved.
      </footer>
    </div>
  );
}
