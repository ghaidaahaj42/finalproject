import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbarlist = ({ currentUser, onLogout }) => {
  return (
    <Navbar bg="myColor" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">GiftFlow</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/ai-help">AI help me!</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          {!currentUser ? (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            </>
          ) : (
            <>
            <NavDropdown title={currentUser} id="navbarScrollingDropdown">
            <NavDropdown.Item  as={Link} to="/list-of-my-gifts">
                List OF My gifts
              </NavDropdown.Item>
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
             
              <Nav.Link as={Link} to="/login">
              <span onClick={onLogout}>Logout</span>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarlist;
