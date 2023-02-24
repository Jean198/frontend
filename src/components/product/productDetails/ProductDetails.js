import React, { useEffect } from 'react';
import './ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../../redux/features/auth/authSlice';
import { useLocation, useParams } from 'react-router-dom';
import {
  getProduct,
  selectProductInfo,
} from '../../../redux/features/product/productSlice';
import Loader from '../../loader/Loader';
import { BsBoxArrowInRight } from 'react-icons/bs';
import DoMPurify from 'dompurify';

const ProductDetails = () => {
  const { isLoggedIn } = useSelector(selectUserInfo);
  //const location = useLocation();
  // const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, isLoading, isError, message } =
    useSelector(selectProductInfo);
  /*
  if (!isLoggedIn) {
    console.log('not loggedin!');
    localStorage.setItem('redirectPath', location.pathname);
    navigate('/login');
    return null;
  }

  */

  const stockAvailability = (quantity) => {
    if (quantity > 0) {
      return <span className='instock'>In Stock</span>;
    }
    return <span className='outofstock'>Out Of Stock</span>;
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className='product-details-container'>
      <h3>Product details </h3>
      <div className='product-info-container'>
        {isLoading && <Loader />}
        {product && (
          <>
            <div className='product-image-container'>
              {product.image ? (
                <img src={product.image.filePath} alt='product' />
              ) : (
                <p>This product has no image</p>
              )}
            </div>
            <p>Product availability: {stockAvailability(product.quantity)} </p>
            <hr />
            <p>
              <span className='product-name'>Product name:</span>{' '}
              <span>{product.name}</span>
            </p>
            <ul>
              <li>
                <span className='product-props'>
                  <BsBoxArrowInRight color='orange' /> SKU
                </span>
                : {product.sku}
              </li>
              <li>
                <span className='product-props'>
                  {' '}
                  <BsBoxArrowInRight color='orange' /> Category
                </span>
                : {product.category}
              </li>
              <li>
                <span className='product-props'>
                  <BsBoxArrowInRight color='orange' /> Price
                </span>
                : {product.price} €
              </li>
              <li>
                <span className='product-props'>
                  {' '}
                  <BsBoxArrowInRight color='orange' /> Stock quantity
                </span>
                : {product.quantity}
              </li>
            </ul>

            <hr />

            <h6>Product description:</h6>

            <div
              dangerouslySetInnerHTML={{
                __html: DoMPurify.sanitize(product.description),
              }}
            ></div>

            <hr />
            <p className='created-at'>
              Created at: {product.createdAt.toLocaleString('en-US')} <br />
              Last updated at: {product.updatedAt.toLocaleString('en-US')}{' '}
              <br />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
