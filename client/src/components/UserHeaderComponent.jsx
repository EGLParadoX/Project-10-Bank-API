import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '../services/ApiService';
import { loginSuccess } from '../redux/actions';

const UserHeaderComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const fullName = user ? `${user.firstName} ${user.lastName}` : '';

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = user.token;
        const profileResponse = await ApiService.getUserProfile(token);
        dispatch(loginSuccess(profileResponse.data)); 
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (user && user.token) {
      fetchUserProfile();
    }
  }, [dispatch, user]);

  return (
    <div className="header">
      <h1>Welcome back<br />{fullName}!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeaderComponent;