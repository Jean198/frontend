import React from 'react';
import ProductSummary from '../productSummary/ProductSummary';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import Search from '../../search/Search';

const productList = ({ products }) => {
  return (
    <>
      <ProductSummary />
      <hr />
      <div className=' row table-title-and-search '>
        <div className='col-lg-6 table-title'>
          <h3>Products Table</h3>
        </div>
        <Search />
      </div>

      <hr />
      <div className='container product-list-container'>
        <div className='table-responsive scrollable'>
          <table className=' table'>
            <thead className='table-head '>
              <tr>
                <th scope='col'>Index</th>
                <th scope='col'>SN</th>
                <th scope='col'>Name</th>
                <th scope='col'>Category</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Value</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <th scope='col'>{product.sku}</th>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>
                        EUR <b>{product.price}</b>
                      </td>
                      <td>{product.quantity}</td>
                      <td>
                        {'EUR'}

                        <b>
                          {Number(product.price) * Number(product.quantity)}
                        </b>
                      </td>
                      <td>
                        <span>
                          <Link to={``}>
                            <AiOutlineEye size={25} color={'purple'} />
                          </Link>
                        </span>
                        <span>
                          <Link to={``}>
                            <FaEdit size={20} color={'green'} />
                          </Link>
                        </span>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color={'red'}
                            cursor='pointer'
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default productList;
