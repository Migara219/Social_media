import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignupForm';
import './App.css';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="app-container">
     
     <div className="logo">
        <img src={'logo.jpg'} alt="Logo" />
      </div>
      
      {!showLogin && !showSignUp && (
        <div className="button-container">
          <button onClick={() => setShowLogin(true)} className="btn">Login</button>
          <button onClick={() => setShowSignUp(true)} className="btn">Sign Up</button>
        </div>
        
      )}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
      <h1>Friends Like Family</h1>
    </div>
    
  );
};

export default App;