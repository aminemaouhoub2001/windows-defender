<section className="bg-[#0a0a0a] text-white py-24 px-6 border-t border-[#1d1d1d]">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Evasion Modules</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Explore advanced techniques used by red teamers and malware developers to bypass modern defenses.
      Dive into real-world evasion strategies, simulated for research and awareness.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* AMSI Patch */}
    <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
      <div className="text-cyan-400 text-4xl mb-4">🧬</div>
      <h3 className="text-xl font-semibold mb-2">AMSI Patch</h3>
      <p className="text-gray-400 mb-4">
        Bypass Windows Antimalware Scan Interface by modifying in-memory detection logic.
      </p>
      <Link to="/techniques/amsi" className="text-cyan-400 font-medium hover:underline">
        Learn more →
      </Link>
    </div>

    {/* XDR Encryption */}
    <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
      <div className="text-cyan-400 text-4xl mb-4">🔐</div>
      <h3 className="text-xl font-semibold mb-2">XDR Encryption</h3>
      <p className="text-gray-400 mb-4">
        Use XOR-based encryption and format shuffling to evade behavioral engines.
      </p>
      <Link to="/techniques/xdr" className="text-cyan-400 font-medium hover:underline">
        Learn more →
      </Link>
    </div>

    {/* Sleep Delay */}
    <div className="bg-[#111111] border border-cyan-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
      <div className="text-cyan-400 text-4xl mb-4">🕒</div>
      <h3 className="text-xl font-semibold mb-2">Sleep Delay</h3>
      <p className="text-gray-400 mb-4">
        Insert sleep routines to delay execution and bypass sandbox detonation timing.
      </p>
      <Link to="/techniques/sleep" className="text-cyan-400 font-medium hover:underline">
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
