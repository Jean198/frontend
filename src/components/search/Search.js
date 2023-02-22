import React from 'react';
import './Search.css';
import { BiSearch } from 'react-icons/bi';

const Search = ({ value, onChange }) => {
  return (
    <div className='search-container'>
      <BiSearch size={18} className='search-icon' />
      <input type='text' placeholder='Search products' onChange={onChange} />
    </div>
  );
};

export default Search;
