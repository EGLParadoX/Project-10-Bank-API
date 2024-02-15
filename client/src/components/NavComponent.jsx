import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/argentBankLogo.png'; 

const NavComponent = () => (
  <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
);

export default NavComponent;