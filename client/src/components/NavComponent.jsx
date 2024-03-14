import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutHandler } from '../utils/handler';
import logo from '../assets/argentBankLogo.png';


const NavComponent = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  
  const navigate = useNavigate();
  const handleLogout = useLogoutHandler(navigate);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <Link onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Log Out
          </Link>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};



export default NavComponent;
