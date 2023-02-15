import React from 'react';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <>
      <div className='form-container'>
        <div class='auth-form'>
          <form>
            <input type='password' placeholder='Password' name='password' />
            <input type='password' placeholder='Password' name='password' />
            <button>Reset Password</button>

            <p class='message'>
              Go back to <Link to='/register'>Login</Link> or{' '}
              <Link to='/'>Homepage</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
