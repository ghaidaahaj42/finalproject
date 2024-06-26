
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar() {
  return (
      <div className="container">
          <header className="d-flex justify-content-center py-3">
              <ul className="nav nav-pills">
                  <li className="nav-item">
                      <NavLink to="/" className="nav-link" activeClassName="active" exact>
                          Home
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/products" className="nav-link" activeClassName="active">
                          Products
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/ai-help" className="nav-link" activeClassName="active">
                          AI help me!
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/about" className="nav-link" activeClassName="active">
                          About
                      </NavLink>
                  </li>
              </ul>
          </header>
      </div>
  );
}

export default NavBar;

