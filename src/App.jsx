import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;