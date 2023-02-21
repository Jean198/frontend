import React from 'react';
import ProductSummary from '../productSummary/ProductSummary';
import './ProductList.css';

const productList = ({ products }) => {
  return (
    <>
      <ProductSummary />
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
                      <td>{}</td>
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
