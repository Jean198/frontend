import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '../../redux/features/auth/authSlice';
import {
  getProducts,
  selectProductInfo,
} from '../../redux/features/product/productSlice';

import ProductList from '../product/productList/ProductList';
import useRedirectUsers from '../../customHook/useRedirectUsers';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectUserInfo);
  const { products, isLoading, isError, message } =
    useSelector(selectProductInfo);

  useEffect(() => {
    console.log('Is loggedIn From dashboard', isLoggedIn);
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className='dashboard'>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
