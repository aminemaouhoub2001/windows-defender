import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#111]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-cyan-400">Mal</span>
          <span className="text-purple-500">ware </span>
          <span className="text-green-400">Evasion</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Techniques & Countermeasures</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Educational platform for security professionals to learn malware evasion.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/techniques" className="bg-cyan-400 text-black px-6 py-2 rounded shadow hover:bg-cyan-300 transition">Explore Techniques</Link>
          <Link to="/resources" className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 transition">Resources</Link>
        </div>
      </section>

      {/* About Section - Background with dot grid */}
      <section className="bg-[#0a0a0a] bg-[url('/dot-grid.svg')] bg-repeat py-20 px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 border-t border-[#1f1f1f]">
        <div>
          <h2 className="text-4xl font-bold mb-4">Empowering Malware Bypass Innovation</h2>
          <p className="text-gray-400 mb-3">
            <span className="text-cyan-400 font-semibold">Evasion Techniques</span> is built for red teamers, researchers and cybersecurity learners to explore advanced Windows Defender bypass methods.
          </p>
          <p className="text-green-400 mt-2">🛡️ Ethical red teaming focused</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#0f0f0f] p-12 rounded-xl border border-cyan-400 shadow-lg animate-pulse">
            <img src="/windows-defender.svg" alt="logo" className="h-24 w-24 opacity-90" />
          </div>
        </div>
      </section>

      {/* Injection Techniques - Background same as Hero */}
      <section className="bg-gradient-to-b from-[#0f0f0f] to-[#111111] py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Injection Techniques</h2>
          <p className="text-gray-400">Core malware techniques tested on modern systems</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: "🧪", title: "Local Shell Injection", desc: "Injecting into local processes" },
            { icon: "🧬", title: "Remote DLL Injection", desc: "DLL injection remotely" },
            { icon: "📡", title: "Remote Shellcode", desc: "Injecting shellcode into other PIDs" },
            { icon: "🔐", title: "Registry Injection", desc: "Payloads hidden in registry keys" }
          ].map((item, i) => (
            <div key={i} className="bg-[#111] p-6 border border-cyan-600 rounded-xl shadow hover:shadow-cyan-500/40 transition">
              <div className="text-3xl mb-3 text-cyan-400">{item.icon}</div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources & Tools - Dot Background */}
      <section className="bg-[#0a0a0a] bg-[url('/dot-grid.svg')] bg-center bg-repeat py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Resources & Tools</h2>
          <p className="text-gray-400">Curated content to assist your malware learning path.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Research Papers", desc: "Academic analysis of evasion methods.", link: "/resources/papers" },
            { title: "Analysis Tools", desc: "Tools for malware debugging & injection.", link: "/resources/tools" },
            { title: "Best Practices", desc: "Defensive countermeasures and playbooks.", link: "/resources/guides" },
            { title: "Malware Samples", desc: "Safe and legal datasets for study.", link: "/resources/samples" }
          ].map((r, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-cyan-600/30 transition">
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{r.desc}</p>
              <Link to={r.link} className="text-cyan-400 text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-400 pt-14 pb-8 px-8 border-t border-[#1d1d1d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2">
              🛡️ Evasion Techniques
            </h1>
            <p className="text-sm mb-4">
              Team project by Moroccan cybersecurity students at ENSA Tangier.
            </p>
            <div className="flex space-x-4 text-xl text-white">
              <a href="https://wa.me/+212123456789" target="_blank" rel="noreferrer">🟢</a>
              <a href="https://t.me/aminemaouhoub" target="_blank" rel="noreferrer">📨</a>
              <a href="https://linkedin.com/in/aminemaouhoub" target="_blank" rel="noreferrer">🔗</a>
              <a href="mailto:maouhoub.amine@etu.uae.ac.ma" target="_blank" rel="noreferrer">✉️</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/techniques" className="hover:underline">Techniques</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Contributors</h4>
            <ul className="space-y-1 text-sm">
              <li>🧠 MAOUHOUB Amine</li>
              <li>🧪 MOUMNI Anas</li>
              <li>🔬 IDIDER Maryem</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Feedback</h4>
            <p className="text-sm mb-2">Have suggestions?</p>
            <Link to="/feedback" className="text-cyan-400 text-sm hover:underline">Leave feedback →</Link>
          </div>
        </div>
        <div className="flex justify-between text-xs border-t border-[#1f1f1f] pt-4">
          <span>© {new Date().getFullYear()} Evasion Techniques.</span>
          <span className="text-gray-500">For educational use only. Use responsibly.</span>
        </div>
      </footer>
    </div>
  );
}
