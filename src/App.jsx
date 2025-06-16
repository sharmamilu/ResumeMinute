// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <AuthProvider>
    <Router>
      {/* <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
