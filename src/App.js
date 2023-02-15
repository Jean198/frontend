import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Forgot from './pages/auth/Forgot';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Home from './pages/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/layout/Layout';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetpassword/:resettoken' element={<Reset />} />

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
