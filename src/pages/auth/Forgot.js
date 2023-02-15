import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <>
      <div className='form-container'>
        <div class='auth-form'>
          <form>
            <input type='email' placeholder='Email' name='email' />
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
