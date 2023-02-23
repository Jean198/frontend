import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productService from '../../../services/productService';

const initialState = {
  product: null,
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  totalStoreValue: 0,
  outOfStock: 0,
  category: [],
};

// Create New product

export const createProduct = createAsyncThunk(
  'products/create',
  async (formData, thunkAPI) => {
    try {
      return await productService.createProduct(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get all products
export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    // I am not sending any data
    try {
      return await productService.getProducts();
    } catch (error) {
      window.location.reload(true);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //return thunkAPI.rejectWithValue(message);
    }
  }
);

//------------------------------------------------------------------------------------------------------------

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    calcStoreValue: (state, action) => {
      const products = action.payload;
      const valuesArray = [];

      products.map((product) => {
        const { price, quantity } = product;
        const productValue = Number(price) * Number(quantity);
        return valuesArray.push(productValue);
      });

      const totalValue = valuesArray.reduce((a, b) => {
        return a + b;
      }, 0);
      state.totalStoreValue = totalValue;
    },

    calcOutOfStock: (state, action) => {
      const products = action.payload;
      const quantityArray = [];

      products.map((product) => {
        const { quantity } = product;
        return quantityArray.push(quantity);
      });

      let count = 0;

      quantityArray.forEach((number) => {
        if (Number(number) === 0) {
          count += 1;
        }
      });

      state.outOfStock = count;
    },

    calcCategory: (state, action) => {
      const products = action.payload;
      const categoryArray = [];

      products.map((product) => {
        const { category } = product;
        return categoryArray.push(category);
      });

      const uniqueCategory = [...new Set(categoryArray)];
      state.category = uniqueCategory;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products.push(action.payload);
        toast.success('product added successfuly!', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, {
          position: toast.POSITION.TOP_CENTER,
        });
      })

      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});

export const { calcStoreValue, calcOutOfStock, calcCategory } =
  productSlice.actions;
export const selectProductInfo = (store) => store.product;
export default productSlice.reducer;
