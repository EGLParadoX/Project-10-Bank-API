import React, { useState, useEffect } from 'react'; // Import useEffect
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../redux/actions';

const EditProfileModal = ({ isOpen, onClose, currentFirstName, currentLastName }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(currentFirstName || '');
    const [lastName, setLastName] = useState(currentLastName || '');   

    useEffect(() => {
      setFirstName(currentFirstName || '');
      setLastName(currentLastName || '');
    }, [currentFirstName, currentLastName]);

    const handleSave = () => {
        dispatch(updateUserProfile({ firstName, lastName }));
        onClose(); 
    };

    const handleCancel = () => {
        onClose(); 
    };
  
    return (
      <div className={isOpen ? 'modal open' : 'modal'}>
        {isOpen && (
          <div className="modal-content">
            <div className='inputs'>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            </div>
            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
};

export default EditProfileModal;
