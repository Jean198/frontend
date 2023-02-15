import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='layout-children-container'></div>
      <Footer />
    </>
  );
};

export default Layout;
