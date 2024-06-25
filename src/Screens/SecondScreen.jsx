// src/SecondScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FirstScreen.css';

function SecondScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="centered-container">
      <div className="card text-center custom-card">
        <div className="card-body">

          <h1>Explore Our Products</h1>
          <h4  className="card-text">Welcome to the our app!</h4> 
          <p className="card-text">lets explore our products</p>
          <button onClick={handleLogout} className="btn btn-primary form-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default SecondScreen;
