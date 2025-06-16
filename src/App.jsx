// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      {/* <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
