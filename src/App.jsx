import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Generator from './pages/Generator';
import Auth from './pages/Auth';
import Signup from './pages/Signup';
import Generating from './pages/Generating'; // ✅ Ajout de la page de génération
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/generating" element={<Generating />} /> {/* ✅ page avec animation */}
        <Route path="*" element={<Auth />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
