import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../redux/features/auth/authSlice';
import { getLoginStatus } from '../services/authService';
import { toast } from 'react-toastify';

const useRedirectUsers = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectUsers = async () => {
      const loginStatus = await getLoginStatus();
      dispatch(setLogin(loginStatus));

      console.log('isloggeding from useRedirect:', loginStatus);

      if (!loginStatus) {
        toast.info('Session expired, please login to continue.');
        navigate(path);
        return;
      }
    };
    redirectUsers();
  }, [navigate, path, dispatch]);
};

export default useRedirectUsers;
