import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h2>Sidebar</h2>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
