import React, { useState } from 'react';
import * as MaterialDesign from 'react-icons/md';

const SidebarItem = ({ item }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(true);
  console.log(isAccountOpen);

  return (
    <>
      <div
        className='menu-item-container'
        onClick={() => setIsAccountOpen(!isAccountOpen)}
      >
        <span className='menu-icon'>{item.icon}</span>
        <h5 className='menu-item-title'>{item.title} </h5>
        {item.title === 'Account' &&
          (isAccountOpen === true ? (
            <>
              <h5 className='expand-sign'>
                <MaterialDesign.MdExpandLess />
              </h5>

              <div>
                <ul>
                  {item.childrens.map((child) => (
                    <li className='child-title'>{child.title}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <h5 className='expand-sign'>
              <MaterialDesign.MdExpandMore />
            </h5>
          ))}
      </div>
    </>
  );
};

export default SidebarItem;
