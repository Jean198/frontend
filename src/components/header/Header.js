import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className=' header-container'>
        <div>
          <h3 className=''>
            <span>Welcome, </span>
            <span className='text-danger'>Jean</span>
          </h3>
        </div>

        <div className=''>
          <button className='btn btn-danger '>Logout</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
