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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false); 
  };

  const handleSaveProfile = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName }));
    closeModal();
  };

  useEffect(() => {
    if (user && user.token && !user.firstName) {
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

  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Loading...';

  return (
    <div className="header">
      <h1>Welcome back<br />{!isEditing && fullName}</h1>
      {!isEditing && <button className="edit-button" onClick={openModal}>Edit Name</button>}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveProfile}
        currentFirstName={user ? user.firstName : ''}
        currentLastName={user ? user.lastName : ''}
      />
    </div>
  );
};

export default UserHeaderComponent;
