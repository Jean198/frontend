import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products`;

// Create New Product

const createProduct = async (formData) => {
  const response = await axios.post(`${API_URL}/createproduct`, formData);
  return response.data;
};

// Get all products

const getProducts = async () => {
  const response = await axios.get(`${API_URL}/getproducts`);
  return response.data;
};

// Delete product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/deleteproduct/${id}`);
  return response.data;
};

// Get a single product

const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/getproduct/${id}`);
  return response.data;
};

// Update a single product

const updateProduct = async (id, formData) => {
  const response = await axios.patch(
    `${API_URL}/updateproduct/${id}`,
    formData
  );
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
