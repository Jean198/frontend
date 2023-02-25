import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import ProductForm from '../../components/product/productForm/ProductForm';
import {
  getProduct,
  getProducts,
  selectProductInfo,
  updateProduct,
} from '../../redux/features/product/productSlice';

const EditProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector(selectProductInfo);
  const { product } = useSelector(selectProductInfo);

  const [productEdit, setProductEdit] = useState(product);
  const [productImage, setProductImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getProduct(id));
    console.log('dispatched again');
  }, [dispatch, id]);

  useEffect(() => {
    setProductEdit(product);
    setImagePreview(
      product && product.image ? `${product.image.filePath}` : null
    );

    setDescription(product && product.description ? product.description : '');
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductEdit({ ...productEdit, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', productEdit.name);
    formData.append('category', productEdit.category);
    formData.append('quantity', Number(productEdit.quantity));
    formData.append('price', productEdit.price);
    formData.append('description', description);

    if (productImage) {
      formData.append('image', productImage);
    }

    if (id) {
      await dispatch(updateProduct({ id, formData }));
      await dispatch(getProducts());
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h3>Edit product</h3>
      {isLoading && <Loader />}
      <ProductForm
        product={productEdit}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default EditProduct;
