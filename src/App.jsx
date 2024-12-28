import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the App</h1>
      <div className="button-container">
        <button onClick={() => navigate('/login')} className="nav-button">Login</button>
        <button onClick={() => navigate('/signup')} className="nav-button">Sign Up</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
