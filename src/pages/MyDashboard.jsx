import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MyDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#0f0f0f] to-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-cyan-400">MMI</span>
          <span className="text-purple-400"> Evader</span> Dashboard
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Select a technique below to simulate malware evasion strategies or manage your security toolkit.
        </p>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-[#111] border border-cyan-700 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Code Obfuscation Pro</h2>
          <p className="text-gray-400 mb-4">Advanced transformation with multi-layered obfuscation.</p>
          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>🌀 Variable/function renaming</li>
            <li>👻 Dead code insertion</li>
            <li>🧩 Control flow flattening</li>
            <li>🔐 String encryption</li>
          </ul>
          <Link
            to="/techniques/obfuscation"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded transition"
          >
            Try Now ($199)
          </Link>
        </div>

        <div className="bg-[#111] border border-purple-700 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Packer & Crypter Bundle</h2>
          <p className="text-gray-400 mb-4">Multi-layer protection with custom encryption.</p>
          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>🧬 Custom encryption algorithms</li>
            <li>📦 Multi-layer packing</li>
            <li>🔍 Anti-debugging features</li>
            <li>💾 Memory-only execution</li>
          </ul>
          <Link
            to="/techniques/crypter"
            className="inline-block bg-purple-500 hover:bg-purple-400 text-black px-4 py-2 rounded transition"
          >
            Explore ($249)
          </Link>
        </div>

        <div className="bg-[#111] border border-green-600 p-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Free Learning Mode</h2>
          <p className="text-gray-400 mb-4">Access our free training techniques and videos.</p>
          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>📚 Learn basic evasion techniques</li>
            <li>💡 No account upgrade required</li>
            <li>📺 Video tutorials and guides</li>
            <li>🌍 Access anywhere</li>
          </ul>
          <Link
            to="/resources/guides"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded transition"
          >
            Start Learning
          </Link>
        </div>
      </section>

      <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} MMI Evader — Educational use only.
      </footer>
    </div>
  );
};

export default MyDashboard;
