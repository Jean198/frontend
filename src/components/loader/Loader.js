import React from 'react';
import loaderImage from '../../assets/images/loader.gif';
import ReactDom from 'react-dom';
import './Loader.css';

const Loader = () => {
  return ReactDom.createPortal(
    <div className='wrapper'>
      <div className='loader'>
        <img src={loaderImage} alt='Loading...' />
      </div>
    </div>,

    document.getElementById('loader')
  );
};

export const SpinnerImg = () => {
  return (
    <div className='smaller-loader'>
      <img src={loaderImage} alt='Loading...' />
    </div>
  );
};

export default Loader;
