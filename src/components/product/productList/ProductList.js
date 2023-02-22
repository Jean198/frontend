import React, { useEffect, useState } from 'react';
import ProductSummary from '../productSummary/ProductSummary';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import Search from '../../search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterProducts } from '../../../redux/features/product/filterSlice';
import { filterProducts } from '../../../redux/features/product/filterSlice';

const ProductList = ({ products }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector(selectFilterProducts);

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Begin pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  //End pagination

  useEffect(() => {
    dispatch(filterProducts({ products, search }));
  }, [products, search]);

  return (
    <>
      <ProductSummary />
      <hr />
      <div className=' row table-title-and-search '>
        <div className='col-lg-6 table-title'>
          <h3>Products Table</h3>
        </div>
        <Search value={search} onChange={onChange} />
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
              {filterProducts &&
                filteredProducts.map((product, index) => {
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

export default ProductList;
