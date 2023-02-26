import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { changePassword } from '../../services/authService';
import './ChangePassword.css';
import { useNavigate, useNavigates } from 'react-router-dom';

const initialState = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, newPassword, confirmPassword } = formData;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return toast.error('passowrds do not match');
    }

    const formData = {
      oldPassword,
      newPassword,
    };

    const data = await changePassword(formData);
    toast.success(data);
    navigate('/user/profile');
  };

  return (
    <div>
      <h3>Change password</h3>
      <div class='change-password-form '>
        <form onSubmit={changePass}>
          <input
            type='password'
            placeholder='Old Password'
            name='oldPassword'
            value={oldPassword}
            onChange={handleInputChange}
          />
          <input
            type='password'
            placeholder='New Password'
            name='newPassword'
            value={newPassword}
            onChange={handleInputChange}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleInputChange}
          />
          <button type='submit'>Update password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
