import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../redux/actions';
import ApiService from '../services/ApiService'; 

const SignInFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [error, setError] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.username.value; 
    const password = e.target.password.value;

    try {
      const response = await ApiService.login(email, password);
      dispatch(loginSuccess(response.data)); 
      navigate('/user'); 
    } catch (error) {
      setError(error.response.data.message || 'Échec de la connexion. Veuillez réessayer.');
      dispatch(loginFailure(error.response.data)); 
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default SignInFormComponent;