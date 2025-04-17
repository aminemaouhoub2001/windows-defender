import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Generator() {
  const [projectName, setProjectName] = useState('');
  const [file, setFile] = useState(null);
  const [outputFormat, setOutputFormat] = useState('');
  const [technique, setTechnique] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (projectName && file && outputFormat && technique) {
      setError('');
    }
  }, [projectName, file, outputFormat, technique]);

  const handleGenerate = () => {
    if (!projectName || !file || !outputFormat || !technique) {
      setError('❌ Please fill in all fields before generating the payload.');
      return;
    }

    setError('');

    // 🔁 Navigate to /generating and send technique via state
    navigate('/generating', {
      state: {
        projectName,
        outputFormat,
        technique,
        fileName: file.name
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-2 py-10">
        <p className="text-cyan-400 tracking-widest text-sm mb-2">
          Craft Undetectable Payloads
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Generate Your Payload</h1>

        <div className="bg-[#121212] p-6 rounded-lg w-full max-w-md shadow-lg">
          {/* Project Name */}
          <label className="block mb-4">
            <span className="text-sm">Project Name</span>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 w-full bg-black border border-gray-600 rounded-md px-3 py-2 text-sm"
            />
          </label>

          {/* Upload EXE */}
          <label className="block mb-4">
            <span className="text-sm">Upload EXE</span>
            <input
              type="file"
              accept=".exe"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 w-full bg-black border border-gray-600 rounded-md px-3 py-2 text-sm text-gray-400"
            />
          </label>

          {/* Output Format */}
          <label className="block mb-4">
            <span className="text-sm">Output Format</span>
            <select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              className="mt-1 w-full bg-black border border-gray-600 rounded-md px-3 py-2 text-sm"
            >
              <option value="">-- Select format --</option>
              <option value="EXE">EXE</option>
              <option value="DLL">DLL</option>
            </select>
          </label>

          {/* Technique */}
          <label className="block mb-6">
            <span className="text-sm">Technique</span>
            <select
              value={technique}
              onChange={(e) => setTechnique(e.target.value)}
              className="mt-1 w-full bg-black border border-gray-600 rounded-md px-3 py-2 text-sm"
            >
              <option value="">-- Select a technique --</option>
              <option value="Patch AMSI (API)">Patch AMSI (API)</option>
              <option value="XDR Encryption">XDR Encryption</option>
              <option value="Sleep 500ms">Sleep 500ms</option>
            </select>
          </label>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-cyan-400 hover:bg-cyan-500 transition text-black font-semibold py-2 rounded-md"
          >
            GENERATE PAYLOAD
          </button>
        </div>
      </main>
    </div>
  );
}
