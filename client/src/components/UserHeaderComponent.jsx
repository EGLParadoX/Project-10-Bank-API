import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '../services/ApiService';
import { updateUserProfile } from '../redux/actions';
import EditProfileModal from './EditProfilModalComponent';
import { useNavigate } from 'react-router-dom'; 

const UserHeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector((state) => state.user.userData);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName }));
    closeModal();
  };

  useEffect(() => {
    console.log('useEffect triggered');
    
    if (user && user.token && !user.firstName) {
      console.log('Fetching user profile...');
      try {
        const fetchUserProfile = async () => {
          const profileResponse = await ApiService.getUserProfile(user.token);
          dispatch(updateUserProfile(profileResponse.data.body));
        };
        fetchUserProfile();
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  }, [dispatch, user]);

  const fullName = user && user.firstName ? `${user.firstName} ${user.lastName}` : 'Loading...';

  return (
    <div className="header">
      <h1>Welcome back<br />{fullName}</h1>
      <button className="edit-button" onClick={openModal}>Edit Name</button>
      <EditProfileModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveProfile} />
    </div>
  );
};

export default UserHeaderComponent;
