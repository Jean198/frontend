import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import './ProductForm.css';

const editorStyle = {
  color: 'black', // set the default text color to black
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
];

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className='add-product-form-container'>
      <div class='add-product-form'>
        <form onSubmit={saveProduct}>
          <div className='image-section'>
            <span>Supported formats: jpg, jpeg, png</span>
            <input
              type='file'
              placeholder='Name'
              name='image'
              value=''
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className='image-preview'>
                <img
                  src={imagePreview}
                  alt='product-image'
                  className='product-image'
                />
              </div>
            ) : (
              <h6>No Image added</h6>
            )}
          </div>

          <input
            type='text'
            placeholder='Name'
            name='name'
            value={product?.name}
            onChange={handleInputChange}
          />
          <input
            type='text'
            placeholder='Category'
            name='category'
            onChange={handleInputChange}
            value={product?.category}
          />
          <input
            type='text'
            placeholder='price'
            required
            name='price'
            onChange={handleInputChange}
            value={product?.price}
          />

          <input
            type='text'
            placeholder='quantity'
            required
            name='quantity'
            onChange={handleInputChange}
            value={product?.quantity}
          />

          <div className='quill-container'>
            <ReactQuill
              style={editorStyle}
              theme='snow'
              value={description}
              onChange={setDescription}
              modules={ProductForm.modules}
              formats={formats}
              className='quill ql-editor'
            />
          </div>
          <button>Save product</button>
        </form>
      </div>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
  ],
};
ProductForm.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'color',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'video',
  'image',
  'code-block',
  'align',
];

export default ProductForm;
