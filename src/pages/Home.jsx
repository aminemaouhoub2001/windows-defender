import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* HERO */}
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
        <Link
         to="/techniques"
             className="bg-cyan-400 text-black px-6 py-2 rounded shadow-lg hover:bg-cyan-300 transition duration-300 
             ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0f0f0f] hover:shadow-cyan-400/70 hover:ring-4"
              >
                    Explore Techniques</Link>
          <Link to="/resources" className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 transition">Resources</Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[url('/dot-grid.svg')] bg-center bg-repeat bg-[#0a0a0a] py-20 px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Empowering Malware Bypass Innovation</h2>
          <p className="text-gray-400 mb-3">
            Our project <span className="text-cyan-400 font-semibold">Evasion Techniques</span> is built to help red teamers, researchers and students understand advanced Windows Defender bypass strategies.
          </p>
          <p className="text-green-400 mt-2">🛡️ Built for red teaming & ethical research</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#0f0f0f] p-20 rounded-xl border border-cyan-400 shadow-lg animate-pulse">
            <img src="/windows-defender.svg" alt="logo" className="h-28 w-28 opacity-90" />
          </div>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="bg-[#0f0f0f] py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Common Evasion Techniques</h2>
          <p className="text-gray-400">Key payload execution strategies used by real-world malware.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: "🧪", title: "Local Shell Injection", desc: "Inject code directly into local processes." },
            { icon: "🧬", title: "Remote DLL Injection", desc: "Inject malicious DLLs remotely." },
            { icon: "📡", title: "Remote Shellcode", desc: "Inject raw shellcode into other processes." },
            { icon: "🔐", title: "Registry Injection", desc: "Persistence via malicious registry entries." }
          ].map((item, i) => (
            <div key={i} className="bg-[#111] p-6 border border-cyan-700 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
              <div className="text-3xl mb-3 text-cyan-400">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* 🔵 View All Techniques Button with Glow */}
        <div className="mt-12 flex justify-center">
        <Link
             to="/techniques"
               className="bg-cyan-400 text-black px-6 py-2 rounded shadow-lg hover:bg-cyan-300 transition duration-300 
             ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0f0f0f] hover:shadow-cyan-400/70 hover:ring-4"
                 >

            View All Techniques
          </Link>
        </div>
      </section>

      {/* TOOLS BLOCK */}
      <section className="bg-[url('/dot-grid.svg')] bg-center bg-repeat bg-[#0a0a0a] py-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resources & Tools</h2>
          <p className="text-gray-400">Everything you need to understand and simulate evasion techniques.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Research Papers", desc: "Academic research on evasion & malware.", link: "/resources/papers" },
            { title: "Analysis Tools", desc: "Explore open-source tools for malware analysis.", link: "/resources/tools" },
            { title: "Best Practices", desc: "Mitigation strategies for evasive payloads.", link: "/resources/guides" },
            { title: "Malware Samples", desc: "Access malware datasets & samples.", link: "/resources/samples" }
          ].map((r, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-cyan-600/30 transition">
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{r.desc}</p>
              <Link to={r.link} className="text-cyan-400 text-sm hover:underline">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY JOIN BLOCK */}
      <section className="bg-[#0f0f0f] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated on Emerging Techniques</h2>
        <p className="text-gray-400 mb-8">
          Join our community to receive the latest updates on evolving malware evasion techniques and countermeasures.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-cyan-300">Join the Community</button>
          <button className="border border-gray-500 px-6 py-2 rounded hover:bg-gray-800">Subscribe to Newsletter</button>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[url('/dot-grid.svg')] bg-center bg-repeat bg-[#0a0a0a] py-6 px-6">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-1">
    
    {/* Bloc gauche - translation vers la gauche */}
    <div className="transform translate-x-[-20px]">
    <div className="flex justify-center items-center h-screen bg-black">
  <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
    Evasion <span className="font-bold">Techniques</span>
  </h1>
</div>

      <p className="text-sm mb-4 leading-relaxed">
        Educating professionals on <span className="text-cyan-400">malware evasion techniques</span>
        <br />for better defense strategies.
      </p>
      <div className="flex space-x-4 text-xl text-white">
        <a href="https://wa.me/+212123456789" target="_blank" rel="noreferrer">🟢</a>
        <a href="https://t.me/aminemaouhoub" target="_blank" rel="noreferrer">📨</a>
        <a href="https://linkedin.com/in/aminemaouhoub" target="_blank" rel="noreferrer">🔗</a>
        <a href="mailto:maouhoub.amine@etu.uae.ac.ma" target="_blank" rel="noreferrer">✉️</a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-semibold text-white mb-2">Quick Links</h4>
      <ul className="space-y-1 text-sm">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/techniques" className="hover:underline">Techniques</Link></li>
        <li><Link to="/resources" className="hover:underline">Resources</Link></li>
      </ul>
    </div>

    {/* Contributors */}
    <div>
      <h4 className="font-semibold text-white mb-2">Contributors</h4>
      <ul className="space-y-1 text-sm">
        <li>MAOUHOUB Amine</li>
        <li>MOUMNI Anas</li>
        <li>IDIDER Maryem</li>
      </ul>
    </div>

    {/* Feedback */}
    <div>
      <h4 className="font-semibold text-white mb-2">Feedback</h4>
      <p className="text-sm mb-2">Let us know what you think about the site:</p>
      <Link to="/feedback" className="text-cyan-400 text-sm hover:underline">Leave a comment →</Link>
    </div>

  </div>
 
  </section>

   <section className="bg-[#0f0f0f] py-10 px-4 text-center">
   <div className="flex justify-between text-xs pt-2">
     <span>© {new Date().getFullYear()} Evasion Techniques. All rights reserved.</span>
     <span className="text-gray-500">For educational purposes only. Use responsibly.</span>
   </div>
 </section>
 </div>
  );
}
