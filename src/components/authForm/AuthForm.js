import './AuthForm.css';

const AuthForm = ({ buttonText }) => {
  return (
    <div class='auth-form'>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>{buttonText}</button>

        <p class='message'>
          Not registered? <a href='#'>Create an account</a>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
