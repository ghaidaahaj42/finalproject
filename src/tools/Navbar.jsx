
import React from "react";
import '../styles/Navbar.css';
function NavBar(){
    return(
        <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/products" class="nav-link">Products</a></li>
        <li class="nav-item"><a href="#" class="nav-link">AI help me!</a></li>

        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
    );
}
export default NavBar;