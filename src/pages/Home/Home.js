import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <nav>
          <h2>Inventory App</h2>
          <ul>
            <li>
              <Link to='/' className='navlink'>
                Register
              </Link>
            </li>
            <li>
              <Link to='/' className='navlink'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
