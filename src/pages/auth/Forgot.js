import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgotPassword, validateEmail } from '../../services/authService';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please enter an email');
    }

    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email');
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail('');
  };
  return (
    <>
      <div className='form-container'>
        <div class='auth-form'>
          <form onSubmit={forgot}>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
            />
            <button>Get Reset Email</button>

            <p class='message'>
              Go back to <Link to='/login'>Login</Link> or to{' '}
              <Link to='/'>Homepage</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgot;
