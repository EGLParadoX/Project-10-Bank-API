import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions';

const EditProfileModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleSave = () => {
        dispatch(updateUserProfile({ firstName, lastName }));
        onClose();
    };
  
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="modal-content edit-profile-modal">
            <span className="close" onClick={() => {onClose();} }>&times;</span>
            <h2>Edit Profile</h2>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            <button className="edit-profile-button" onClick={handleSave}>Save</button>
          </div>
        )}
      </div>
    );
};

export default EditProfileModal;
