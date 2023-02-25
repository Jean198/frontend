import React, { useEffect, useState } from 'react';
import ProductSummary from '../productSummary/ProductSummary';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { CgTrashEmpty } from 'react-icons/cg';
import Search from '../../search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterProducts } from '../../../redux/features/product/filterSlice';
import { filterProducts } from '../../../redux/features/product/filterSlice';
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  deleteProduct,
  getProducts,
} from '../../../redux/features/product/productSlice';
import Loader from '../../loader/Loader';

const ProductList = ({ products, isLoading }) => {
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
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  //Delete product action

  const delProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
    window.location.reload(true);
  };

  //Delete product popup
  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure to delete this product',
      buttons: [
        {
          label: 'Yes',
          onClick: () => delProduct(id),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  //End pagination

  useEffect(() => {
    dispatch(filterProducts({ products, search }));
  }, [dispatch, products, search]);

  return (
    <>
      <ProductSummary products={products} />
      <hr />
      <div className=' row table-title-and-search '>
        <div className='col-lg-6 table-title'>
          <h3>All products</h3>
        </div>
        <Search value={search} onChange={onChange} />
      </div>

      <hr />

      {isLoading && <Loader />}
      <div className='container product-list-container'>
        <div className='table-responsive scrollable'>
          {!isLoading && products.length === 0 ? (
            <div className='no-products-div'>
              <p>
                No product found! Please add a product{' '}
                <CgTrashEmpty color='red' />
              </p>
            </div>
          ) : (
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
                {currentItems &&
                  currentItems.map((product, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{product.sku}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>
                          <b>{product.price}</b> €
                        </td>
                        <td>{product.quantity}</td>
                        <td>
                          <b>
                            {parseFloat(product.price) *
                              parseFloat(product.quantity)}
                          </b>{' '}
                          €{' '}
                        </td>
                        <td>
                          <span>
                            <Link to={`/products/${product._id}`}>
                              <AiOutlineEye
                                size={25}
                                color={'purple'}
                                className='actions'
                              />
                            </Link>
                          </span>
                          <span>
                            <Link to={`/products/updateproduct/${product._id}`}>
                              <FaEdit
                                size={20}
                                color={'green'}
                                className='actions'
                              />
                            </Link>
                          </span>
                          <span>
                            <FaTrashAlt
                              size={20}
                              color={'red'}
                              cursor='pointer'
                              onClick={() => confirmDelete(product._id)}
                              className='actions'
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='Next'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='Prev'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='activePage'
        />
      </div>
    </>
  );
};

export default ProductList;
