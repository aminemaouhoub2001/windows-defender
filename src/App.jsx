import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Generator from './pages/Generator';
import Auth from './pages/Auth';
import Signup from './pages/Signup';
import Generating from './pages/Generating';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Result from './pages/Result'; // ✅ importer Result

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/result" element={<Result />} /> {/* ✅ route manquante */}
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
