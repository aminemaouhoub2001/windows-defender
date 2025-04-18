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

        <div className="flex justify-center space-x-4">
          <Link to="/techniques" className="bg-cyan-400 text-black px-6 py-2 rounded shadow-lg hover:bg-cyan-300 transition duration-300">
            Explore Techniques →
          </Link>
          <button className="px-6 py-2 border border-gray-600 rounded hover:bg-gray-800 transition duration-300">
            Why Learn This?
          </button>
        </div>
      </section>

      {/* About Project */}
      <section className="bg-[#101010] grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-20 px-8 md:px-16 border-t border-[#1f1f1f]">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Empowering Malware Bypass Innovation</h2>
          <p className="text-gray-400 mb-4">
            <span className="text-cyan-400 font-medium">Evasion Techniques</span> is an advanced lab for ethical hacking and malware defense. Learn how to perform bypass methods like shellcode injection and stealth DLL execution.
          </p>
          <p className="text-gray-400 mb-4">
            This platform supports researchers, red teamers, and cybersecurity students to build awareness about evasion techniques.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Local Shell Injection", icon: "🧪", link: "/techniques/local-shell", desc: "Inject code locally to execute payloads silently." },
            { title: "Remote DLL Injection", icon: "📦", link: "/techniques/remote-dll", desc: "Inject DLLs remotely into a target process." },
            { title: "Remote Shellcode Injection", icon: "📡", link: "/techniques/remote-shellcode", desc: "Inject shellcode into remote process memory." },
            { title: "Registry Injection", icon: "🧬", link: "/techniques/registry-injection", desc: "Achieve persistence using Windows Registry." }
          ].map((tech, i) => (
            <div key={i} className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
              <div className="text-cyan-400 text-3xl mb-3">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{tech.desc}</p>
              <Link to={tech.link} className="text-cyan-400 text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/techniques" className="px-6 py-2 border border-cyan-400 rounded text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-lg shadow-cyan-800/30">
            Explore All Techniques
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-[#0f0f0f] py-20 px-6 text-white border-t border-[#1b1b1b]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Curated resources to help you understand, detect, and defend against evasive malware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-[#111111] rounded-xl p-6 shadow hover:shadow-cyan-500/30 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
            <p className="text-gray-400 text-sm mb-4">
              Academic research and papers on malware evasion and detection techniques.
            </p>
            <Link to="/resources/papers" className="text-cyan-400 text-sm hover:underline">Browse papers →</Link>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 shadow hover:shadow-cyan-500/30 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Analysis Tools</h3>
            <p className="text-gray-400 text-sm mb-4">
              Tools for analyzing and understanding malware evasion capabilities.
            </p>
            <Link to="/resources/tools" className="text-cyan-400 text-sm hover:underline">Explore tools →</Link>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 shadow hover:shadow-cyan-500/30 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
            <p className="text-gray-400 text-sm mb-4">
              Defense strategies and tips to counter evasive malware techniques.
            </p>
            <Link to="/resources/guides" className="text-cyan-400 text-sm hover:underline">Read guides →</Link>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 shadow hover:shadow-cyan-500/30 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Malware Samples</h3>
            <p className="text-gray-400 text-sm mb-4">
              Public malware datasets and controlled samples for safe analysis and testing.
            </p>
            <Link to="/resources/samples" className="text-cyan-400 text-sm hover:underline">Access samples →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-[#1a1a1a]">
        © {new Date().getFullYear()} Evasion Techniques. All rights reserved.
      </footer>
    </div>
  );
}
