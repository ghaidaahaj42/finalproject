// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import Products from './Screens/Products';
import NavBar from './tools/Navbar';
import Balloons from './background/ballons';

function App() {
  return (
    <Router>
      <div className="App">
        <Balloons />
        <NavBar className="navbar" />
        <div className="content">
          <Routes>
            <Route path="/" element={<FirstScreen className="screen" />} />
            {/* <Route path="/second" element={<SecondScreen className="screen" />} /> */}
            <Route path="/products" element={<Products className="screen" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
