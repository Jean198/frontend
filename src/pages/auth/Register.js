import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import { validateEmail } from '../../services/authService';
import { registerUser } from '../../services/authService';

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error('All fields are required', toastPosition);
    }

    if (password.length < 6) {
      return toast.error(
        'Password must be atleast 6 characters',
        toastPosition
      );
    }

    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email', toastPosition);
    }

    if (password !== password2) {
      return toast.error('Passwords do not match!', toastPosition);
    }

    const userData = {
      name,
      email,
      password,
    };

    setIsLoading(true);
    await registerUser(userData);
    setIsLoading(false);
  };

  return (
    <div className='form-container'>
      {isLoading && <Loader />}
      <div class='auth-form'>
        <form onSubmit={register}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          <input
            type='password'
            placeholder='Password'
            required
            name='password'
            value={password}
            onChange={handleInputChange}
          />
          <input
            type='password'
            placeholder='Confirm password'
            required
            name='password2'
            value={password2}
            onChange={handleInputChange}
          />
          <button>Register</button>

          <p class='message'>
            Aleardy registered? <Link to='/login'>Login</Link>
          </p>
          <p class='message'>
            Back to <Link to='/'>Homepage</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
