import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserInfo, setLogin } from '../../redux/features/auth/authSlice';
import { logoutUser } from '../../services/authService';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(selectUserInfo);

  const logout = async () => {
    await logoutUser();
    await dispatch(setLogin(false));
    navigate('/login');
  };

  return (
    <>
      <div className=' header-container'>
        <div>
          <h3 className=''>
            <span>Welcome, </span>
            <span className='text-danger'>{name}</span>
          </h3>
        </div>

        <div className=''>
          <button className='btn btn-danger ' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
