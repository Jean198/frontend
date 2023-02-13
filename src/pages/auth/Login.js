import React from 'react';
import AuthForm from '../../components/authForm/AuthForm';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className='form-container'>
        <AuthForm buttonText='Login' />
      </div>
    </>
  );
};

export default Login;
