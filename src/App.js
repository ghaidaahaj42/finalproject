// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from './Screens/FirstScreen';

import Products from './Screens/Products';
import NavBar from './tools/Navbar';
import Balloons from './background/ballons';
import LikedProducts from './Screens/MyProducts';
import SurveyForm from './Screens/AIForom'
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
            <Route path="/myProducts" element={<LikedProducts  className="screen" />} />
            <Route path="/ai-help" element={<SurveyForm  className="screen" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
