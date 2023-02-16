import React from 'react';
import './Sidebar.css';
import menuItems from '../../data/sidebarData';
import SidebarItem from './SidebarItem';
import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const backToHomepage = () => {
    navigate('/');
  };
  return (
    <div className='layout'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <div>
            <h3>Dashboard</h3>
          </div>
          <div className='home-icon' onClick={() => backToHomepage()}>
            <AiOutlineHome size={25} />
          </div>
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
