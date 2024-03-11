import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import User from './pages/User';
import { getUserToken } from './utils/storage';
import { loginSuccess } from './redux/actions';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      dispatch(loginSuccess({ token }));
    }
  }, [dispatch]);

  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}


export default App;
