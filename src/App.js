import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Register from './Register';
import Navbarlist from './Navbarlist';
import Balloons from './background/ballons';
import HomePage from './HomePage';
import Contact from './Contact';
import SurveyForm from './AIForom';
import Products from './Products';
import './App.css';
import ListOFMygifts from './ListOFMygifts';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
      
    <div className="container">
        <Balloons></Balloons> 
        <Navbarlist currentUser={currentUser} onLogout={handleLogout} />
        <Routes>
         
        <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/login" element={<Login users={users} onLogin={handleLogin} />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-help" element={<SurveyForm/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/list-of-my-gifts" element={<ListOFMygifts/>} />
          <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
          
        </Routes>
      </div>
    
  );
}

export default App;
