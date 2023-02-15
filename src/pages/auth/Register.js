import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='form-container'>
      <div class='auth-form'>
        <form>
          <input type='text' placeholder='Name' name='name' />
          <input type='email' placeholder='Email' name='email' />
          <input
            type='password'
            placeholder='Password'
            required
            name='password'
          />
          <input
            type='password'
            placeholder='Confirm password'
            required
            name='password'
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
