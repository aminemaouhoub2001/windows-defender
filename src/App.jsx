import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Signup from './pages/Signup';
import Generator from './pages/Generator';
import Generating from './pages/Generating';
import Result from './pages/Result';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';

const Placeholder = () => <div className="text-white p-10">Coming Soon...</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/result" element={<Result />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* 🔧 Routes temporairement ajoutés pour éviter le crash */}
        <Route path="/techniques" element={<Placeholder />} />
        <Route path="/resources" element={<Placeholder />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
