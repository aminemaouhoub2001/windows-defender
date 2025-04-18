import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#111111]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-cyan-400">Mal</span>
          <span className="text-purple-500">ware </span>
          <span className="text-green-400">Evasion</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Techniques & Countermeasures</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Educational platform for security professionals to learn malware evasion.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/techniques" className="bg-cyan-400 text-black px-6 py-2 rounded shadow hover:bg-cyan-300 transition">Explore Techniques</Link>
          <Link to="/resources" className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 transition">Resources</Link>
        </div>
      </section>

      {/* 2. ABOUT PROJECT */}
      <section className="bg-[#0f0f0f] bg-[url('/dot-grid.svg')] bg-center bg-repeat py-20 px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 border-t border-[#1f1f1f]">
        <div>
          <h2 className="text-4xl font-bold mb-4">Empowering Malware Bypass Innovation</h2>
          <p className="text-gray-400 mb-3">
            Our project <span className="text-cyan-400 font-semibold">Evasion Techniques</span> is built to help red teamers, researchers and students understand advanced Windows Defender bypass strategies.
          </p>
          <p className="text-green-400 mt-2">🛡️ Built for red teaming & ethical research</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#222] p-10 rounded-xl border border-cyan-400 shadow-lg animate-pulse">
            <img src="/windows-defender.svg" alt="logo" className="h-20 w-20 opacity-90" />
          </div>
        </div>
      </section>

      {/* 3. TECHNIQUES */}
      <section className="bg-[#0f0f0f] py-24 px-6 border-t border-[#1d1d1d]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Injection Techniques</h2>
          <p className="text-gray-400">Explore the core evasion strategies malware uses to avoid detection.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: "🧪", title: "Local Shell Injection", desc: "Inject into processes on the same host." },
            { icon: "🧬", title: "Remote DLL Injection", desc: "Remotely insert malicious DLLs into targets." },
            { icon: "📡", title: "Remote Shellcode", desc: "Inject raw shellcode across process boundaries." },
            { icon: "🔐", title: "Registry Injection", desc: "Abuse registry keys for stealthy persistence." }
          ].map((item, i) => (
            <div key={i} className="bg-[#111] p-6 border border-cyan-700 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
              <div className="text-3xl mb-3 text-cyan-400">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RESOURCES */}
      <section className="bg-[#0f0f0f] bg-[url('/dot-grid.svg')] bg-center bg-repeat py-20 px-6 border-t border-[#1f1f1f]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resources & Tools</h2>
          <p className="text-gray-400">Learn, analyze and improve defenses using curated content.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Research Papers", desc: "Academic resources on malware evasion." },
            { title: "Analysis Tools", desc: "Free tools for analyzing injection & persistence." },
            { title: "Best Practices", desc: "Defense tactics and mitigation strategies." },
            { title: "Malware Samples", desc: "Explore datasets for training & testing." }
          ].map((r, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-cyan-500/30 transition">
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
              <Link to="/resources" className="text-cyan-400 text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STAY UPDATED */}
      <section className="bg-[#0f0f0f] py-24 px-6 border-t border-[#1d1d1d]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on Emerging Techniques</h2>
          <p className="text-gray-400 mb-6">
            Join our community to receive updates on evolving malware evasion techniques and countermeasures.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded shadow">Join the Community</button>
            <button className="bg-[#1a1a1a] border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 text-white">Subscribe to Newsletter</button>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#0f0f0f] bg-[url('/dot-grid.svg')] bg-center bg-repeat text-gray-400 pt-14 pb-8 px-8 border-t border-[#1d1d1d]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2">
              🛡️ Evasion Techniques
            </h1>
            <p className="text-sm mb-4">
              Educating professionals about malware evasion for stronger defenses.
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
              <li>MAOUHOUB Amine</li>
              <li>MOUMNI Anas</li>
              <li>IDIDER Maryem</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Feedback</h4>
            <p className="text-sm mb-2">Let us know what you think:</p>
            <Link to="/feedback" className="text-cyan-400 text-sm hover:underline">Leave a comment →</Link>
          </div>
        </div>
        <div className="flex justify-between text-xs border-t border-[#1f1f1f] pt-4">
          <span>© {new Date().getFullYear()} Evasion Techniques. All rights reserved.</span>
          <span className="text-gray-500">For educational purposes only. Use responsibly.</span>
        </div>
      </footer>
    </div>
  );
}
