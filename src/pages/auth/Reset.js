import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from '../../services/authService';

const initialState = {
  password: '',
  password2: '',
};

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
};

const Reset = () => {
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const navigate = useNavigate();

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error('Passwords must be up to 6 characters', toastPosition);
    }
    if (password !== password2) {
      return toast.error('Passwords do not match', toastPosition);
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className='form-container'>
        <div class='auth-form'>
          <form onSubmit={reset}>
            <input
              type='password'
              placeholder='New Password'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
            <input
              type='password'
              placeholder='Confirm new Password'
              name='password2'
              value={password2}
              onChange={handleInputChange}
            />
            <button>Reset Password</button>

            <p class='message'>
              Go back to <Link to='/login'>Login</Link> or{' '}
              <Link to='/'>Homepage</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
