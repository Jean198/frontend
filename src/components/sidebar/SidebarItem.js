import React, { useState } from 'react';
import * as MaterialDesign from 'react-icons/md';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <>
      <div
        className='menu-item-container'
        onClick={() => setIsAccountOpen(!isAccountOpen)}
      >
        <span className='menu-icon'>{item.icon}</span>
        <Link to={item.path} className='menu-item-title'>
          {item.title}
        </Link>
        {item.title === 'Account' &&
          (isAccountOpen === true ? (
            <>
              <MaterialDesign.MdExpandLess size={25} />

              <div>
                <ul>
                  {item.childrens.map((child) => (
                    <li className='child-title'>
                      <h6>
                        {' '}
                        <Link to={child.path} className='link'>
                          {child.title}
                        </Link>
                      </h6>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <MaterialDesign.MdExpandMore size={25} />
          ))}
      </div>
    </>
  );
};

export default SidebarItem;
