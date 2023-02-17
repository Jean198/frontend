import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/features/auth/authSlice';

export const ShowOnLogin = ({ children }) => {
  const { isLoggedIn } = useSelector(selectUserInfo);

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};
