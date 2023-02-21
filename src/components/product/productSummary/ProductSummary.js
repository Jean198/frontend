import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsCart4, BsCartX } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import './ProductSummary.css';

const ProductSummary = () => {
  return (
    <div className='row statistics-container'>
      <div className='col-lg-3 col-md-6 col-sm-6'>
        <div className='single-stat-container total'>
          <div className='icon-container'>
            <BsCart4 size={30} />
          </div>
          <div className='text-container'>
            <p>
              Total Products <br /> Value
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-6'>
        <div className='single-stat-container total-value'>
          <div className='icon-container'>
            <AiFillDollarCircle size={30} />
          </div>
          <div className='text-container'>
            <p>
              Total Products <br /> Value
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-6'>
        <div className='single-stat-container out-of-stock'>
          <div className='icon-container'>
            <BsCartX size={30} />
          </div>
          <div className='text-container'>
            <p>
              Total Products <br /> Value
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-6'>
        <div className='single-stat-container categories'>
          <div className='icon-container'>
            <BiCategory size={30} />
          </div>
          <div className='text-container'>
            <p>
              Total Products <br /> Value
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
