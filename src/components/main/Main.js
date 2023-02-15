import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Main.css';

const Main = ({ children }) => {
  return (
    <div className='main'>
      <Header />
      <div className='layout-children-container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
