import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validateEmail } from '../../services/authService';
import { loginUser } from '../../services/authService';
import {
  setLogin,
  setName,
  setUserImage,
} from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/Loader';
const initialState = {
  email: '',
  password: '',
};

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error('All fields are required', toastPosition);
    }

    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email', toastPosition);
    }

    const userData = {
      email,
      password,
    };

    setIsLoading(true);

    try {
      const data = await loginUser(userData);
      await dispatch(setLogin(true));
      await dispatch(setName(data.name));
      await dispatch(setUserImage(data.photo));
      await navigate('/dashboard');
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='form-container'>
        {isLoading && <Loader />}
        <div className='auth-form'>
          <form onSubmit={login}>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
            <button>Login</button>

            <p className='message'>
              Not registered? <Link to='/register'>Register</Link>
            </p>
            <p className='message'>
              Forgot password? <Link to='/forgot'>Click here</Link>
            </p>
            <p className='message'>
              Back to <Link to='/'>Homepage</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
