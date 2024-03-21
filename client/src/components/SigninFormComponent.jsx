import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { handleSubmit } from '../utils/handler';

const SignInFormComponent = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const loginError = useSelector(state => state.user.error); 
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user');
    }
  }, [isAuthenticated, navigate]);

  const handleFormSubmit = (e) => {
    handleSubmit(e, dispatch, navigate);
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit}>
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
        {loginError && <div className="error-message">{loginError}</div>} 
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default SignInFormComponent;
