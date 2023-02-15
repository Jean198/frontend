import React from 'react';

const Header = () => {
  return (
    <div className='row'>
      <h3 className='col-lg-6'>
        <span>Welcome,</span>
        <span className='text-success'>Jean</span>
      </h3>
      <button className='btn btn-danger col-lg-6'>Logout</button>
    </div>
  );
};

export default Header;
