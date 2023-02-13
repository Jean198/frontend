import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from '../../assets/images/home-page.webp';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <nav>
          <h2>Inventory App</h2>
          <ul>
            <li>
              <Link to='/login' className='navlink'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/register' className='navlink'>
                Register
              </Link>
            </li>
            <li>
              <Link to='/login' className='navlink'>
                Login
              </Link>
            </li>
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
