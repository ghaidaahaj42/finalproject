import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Navbarlist from './Navbarlist';
import Balloons from './background/ballons';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import SurveyForm from './pages/AIForom';
import Products from './Products';
import './App.css';
import ListOFMygifts from './pages/ListOFMygifts';
import InvetationPage from './pages/InvetationPage';
import InvetationForom from './pages/InvetationForom'

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
          <Route path="/invitation/:childName" element={<InvetationPage />} />
          <Route path="/invitation-form" element={<InvetationForom />} />
          
        </Routes>
      </div>
    
  );
}

export default App;
