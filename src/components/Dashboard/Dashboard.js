import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '../../redux/features/auth/authSlice';
import {
  getProducts,
  selectProductInfo,
} from '../../redux/features/product/productSlice';

import ProductList from '../product/productList/ProductList';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectUserInfo);
  console.log(isLoggedIn);
  const { products, isLoading, isError, message } =
    useSelector(selectProductInfo);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    console.log(products);
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className='dashboard'>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
