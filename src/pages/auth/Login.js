import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className='form-container'>
        <div class='auth-form'>
          <form>
            <input type='text' placeholder='Name' name='name' />
            <input type='email' placeholder='Email' name='email' />
            <button>Login</button>

            <p class='message'>
              Not registered? <Link to='/register'>Register</Link>
            </p>
            <p class='message'>
              Forgot password? <Link to='/forgot'>Click here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
