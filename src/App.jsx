import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  
  return (
    <Router>

      <h1>welcome to Connect where Friends Become Family </h1>
      <div className="app-container">
        <div className="Login-signup-buttons">
         
            <button><Link to="/login" className="nav-link">Login</Link></button>
            <button><Link to="/signup" className="nav-link">Sign Up</Link></button>
          
        </div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
