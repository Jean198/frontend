import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from '../../assets/images/home-page.webp';

import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/features/auth/authSlice';

const Home = () => {
  const { isLoggedIn } = useSelector(selectUserInfo);
  const { name } = useSelector(selectUserInfo);
  const userInfo = useSelector(selectUserInfo);

  return (
    <div className='home'>
      <div className='container'>
        <nav>
          <h2>Inventory App</h2>
          <ul>
            {isLoggedIn && (
              <li>
                <Link to='/dashboard' className='navlink'>
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to='/register' className='navlink'>
                Register
              </Link>
            </li>

            {isLoggedIn && (
              <li className='profileInfo'>
                <h6>{name}</h6>
                <img
                  src={userInfo.user.photo}
                  alt='userphoto'
                  className='userPhoto'
                />
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <Link to='/login' className='navlink'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <section className='hero-section container'>
        <div className='row'>
          <div className='hero-text col-lg-6'>
            <h2>
              Inventory {'&'} <br /> Stock Management Solution
            </h2>

            <p className='mt-4'>
              Inventory system to control and manage products in the warehouse
              in real time and integrated to make it easier to develop your
              business
            </p>

            <button className='btn btn-lg btn-outline-light mt-4'>
              Free Trial 1 Month
            </button>
          </div>
          <div className='hero-image col-lg-6'>
            <img src={homeImage} alt='' className='home-image' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
