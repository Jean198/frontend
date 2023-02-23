import React, { useEffect } from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsCart4, BsCartX } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import './ProductSummary.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductInfo } from '../../../redux/features/product/productSlice';
import {
  calcStoreValue,
  calcOutOfStock,
  calcCategory,
} from '../../../redux/features/product/productSlice';

export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();

  const { totalStoreValue, outOfStock, category } =
    useSelector(selectProductInfo);

  useEffect(() => {
    dispatch(calcStoreValue(products));
    dispatch(calcOutOfStock(products));
    dispatch(calcCategory(products));
  }, [dispatch, products]);

  return (
    <div className='row statistics-container'>
      <div className='col-lg-3 col-md-6 col-sm-6'>
        <div className='single-stat-container total'>
          <div className='icon-container'>
            <BsCart4 size={30} />
          </div>
          <div className='text-container'>
            <p>
              Total Products <br /> <span>{products.length}</span>
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
              Total Store value <br />{' '}
              <span>{formatNumbers(totalStoreValue)} €</span>
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
              Out Of Stock <br /> <span>{outOfStock}</span>
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
              All categories in the store <br /> <span>{category.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
