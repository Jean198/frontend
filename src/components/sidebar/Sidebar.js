import React from 'react';
import './Sidebar.css';
import menuItems from '../../data/sidebarData';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h3>Dashboard</h3>
        </div>
        <div className='menu-container'>
          {menuItems.map((item, index) => {
            return <SidebarItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
