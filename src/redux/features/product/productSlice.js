import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create New product

const createProduct = createAsyncThunk('products/create', async () => {
  try {
  } catch (error) {}
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    calStoreValue: () => {
      console.log('store value');
    },
  },

  extraReducers: (builder) => {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
