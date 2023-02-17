import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { selectUserInfo } from './redux/features/auth/authSlice';
import Main from './components/main/Main';
import Forgot from './pages/auth/Forgot';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Home from './pages/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/layout/Layout';
import Profile from './pages/profile/Profile';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

axios.defaults.withCredentials = true; //WithCredentials helps to get credentials from backend

function App() {
  const { isLoggedIn } = useSelector(selectUserInfo);
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetpassword/:resetToken' element={<Reset />} />

        {isLoggedIn === true ? ( //Protecting route
          <Route
            path='/dashboard'
            element={
              <Layout>
                <Main>
                  <Dashboard />
                </Main>
              </Layout>
            }
          />
        ) : (
          <Route path='/dashboard' element={<Login />} />
        )}

        <Route
          path='/profile'
          element={
            <Layout>
              <Main>
                <Profile />
              </Main>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
