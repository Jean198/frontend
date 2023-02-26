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
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import AddProduct from './pages/addProduct/AddProduct';
import Cookies from 'js-cookie';
import { setLogin } from './redux/features/auth/authSlice';
import ProductDetails from './components/product/productDetails/ProductDetails';
import EditProduct from './pages/editProduct/EditProduct';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authService';
import UserProfile from './pages/userProfile/UserProfile';
import EditProfile from './pages/userProfile/EditProfile';

axios.defaults.withCredentials = true; //WithCredentials helps to get credentials from backend

function App() {
  const { isLoggedIn } = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  console.log('Is loggedIn From App.js', isLoggedIn);

  useEffect(() => {
    async function logiStatus() {
      const status = await getLoginStatus();
      await dispatch(setLogin(status));
    }

    logiStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetpassword/:resetToken' element={<Reset />} />

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

        <Route
          path='/products/addproduct'
          element={
            <Layout>
              <Main>
                <AddProduct />
              </Main>
            </Layout>
          }
        />

        <Route
          path='/products/:id'
          element={
            <Layout>
              <Main>
                <ProductDetails />
              </Main>
            </Layout>
          }
        />

        <Route
          path='/products/updateproduct/:id'
          element={
            <Layout>
              <Main>
                <EditProduct />
              </Main>
            </Layout>
          }
        />

        <Route
          path='/user/profile'
          element={
            <Layout>
              <Main>
                <UserProfile />
              </Main>
            </Layout>
          }
        />

        <Route
          path='/user/editprofile'
          element={
            <Layout>
              <Main>
                <EditProfile />
              </Main>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
