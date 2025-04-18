import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />

      {/* Hero Section (Background uni) */}
      <section className="text-center py-20 px-6 bg-[#0f0f0f]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-cyan-400">Mal</span>
          <span className="text-purple-500">ware </span>
          <span className="text-green-400">Evasion</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Techniques & Countermeasures
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Educational platform for security professionals to learn malware evasion.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/techniques" className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-cyan-300 transition">
            Explore Techniques
          </Link>
          <Link to="/resources" className="border px-6 py-2 rounded hover:bg-gray-800 transition">
            Resources
          </Link>
        </div>
      </section>

      {/* Block 2 – Empowering Innovation (Background à carreaux) */}
      <section className="bg-[url('/grid-bg.png')] bg-cover py-20 px-6 border-t border-[#1f1f1f] grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Malware Bypass Innovation
          </h2>
          <p className="text-gray-400 mb-3">
            Our project <span className="text-cyan-400 font-semibold">Evasion Techniques</span> is a smart platform to simulate advanced <strong>Windows Defender bypass</strong> strategies like:
          </p>
          <ul className="text-gray-400 mb-4 list-disc pl-5 space-y-1">
            <li>Local Shell Injection</li>
            <li>Remote DLL Injection</li>
            <li>Remote Shellcode Injection</li>
            <li>Registry Injection</li>
            <li>+ More advanced red teaming techniques</li>
          </ul>
          <p className="text-green-400 mt-2 font-medium flex items-center gap-2">
            <span className="animate-pulse">⚡</span> Built for ethical research & red teaming
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="border border-cyan-400 rounded-xl p-12 bg-[#0f0f0f] shadow-lg shadow-cyan-400/20">
            <img src="/windows-defender.svg" alt="defender logo" className="h-20 w-20" />
          </div>
        </div>
      </section>

      {/* Block 3 – Common Techniques (Background uni) */}
      <section className="bg-[#0f0f0f] text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Evasion Techniques</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Explore the most prevalent techniques malware authors use to evade security controls and analysis tools.
        </p>
        <div className="grid gap-6 md:grid-cols-4 px-4 md:px-20">
          {[
            ['Local Shell Injection', 'Executes shellcode locally to hijack process context.'],
            ['Remote DLL Injection', 'Injects a malicious DLL into another process.'],
            ['Shellcode Injection', 'Direct shellcode execution in remote memory space.'],
            ['Registry Injection', 'Persistence via registry manipulation.']
          ].map(([title, desc], i) => (
            <div key={i} className="bg-[#111111] p-6 rounded-xl shadow-md hover:shadow-cyan-500/10 transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-3">{desc}</p>
              <Link to="/techniques" className="text-cyan-400 text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Block 4 – Resources (Background à carreaux) */}
      <section className="bg-[url('/grid-bg.png')] bg-cover py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Tools</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Curated resources to help you understand, detect, and defend against evasive malware.
        </p>
        <div className="grid md:grid-cols-3 gap-6 px-4 md:px-20">
          {[
            ['Research Papers', 'Academic research and papers on malware evasion.', 'Browse papers'],
            ['Analysis Tools', 'Tools for analyzing and testing techniques.', 'Explore tools'],
            ['Best Practices', 'Red teaming & detection engineering guides.', 'Read guides']
          ].map(([title, desc, action], i) => (
            <div key={i} className="bg-[#111111] p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-400/10 transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-3">{desc}</p>
              <a href="#" className="text-cyan-400 text-sm hover:underline">{action} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Block 5 – Team & Contact */}
      <section className="bg-[#0f0f0f] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the Team</h2>
        <p className="text-gray-400 mb-8">Creators of this platform:</p>
        <div className="flex justify-center space-x-10 mb-6">
          {[
            ['MAOUHOUB Amine', 'LinkedIn', 'https://linkedin.com/in/amine'],
            ['MOUMNI Anas', 'Telegram', 'https://t.me/anas'],
            ['IDIDER Maryem', 'WhatsApp', 'https://wa.me/+2126XXXX']
          ].map(([name, platform, link], i) => (
            <div key={i} className="text-sm text-gray-300">
              <p className="font-semibold">{name}</p>
              <a href={link} target="_blank" className="text-cyan-400 hover:underline">{platform}</a>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">Feel free to share your thoughts or support our mission!</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-6 px-6 text-sm text-gray-500 flex justify-between items-center flex-wrap">
        <div>© {new Date().getFullYear()} Evasion Techniques. All rights reserved.</div>
        <div className="text-right text-xs">
          For educational purposes only. Use responsibly.
        </div>
      </footer>
    </div>
  );
}
