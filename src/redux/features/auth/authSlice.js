import { createSlice } from '@reduxjs/toolkit';

const name = JSON.parse(localStorage.getItem('name'));
const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
const userPhoto = JSON.parse(localStorage.getItem('userPhoto'));

const initialState = {
  isLoggedIn: isLoggedIn ? isLoggedIn : false,
  name: name ? name : '',
  user: {
    name: '',
    email: '',
    phone: '',
    bio: '',
    photo: userPhoto ? userPhoto : '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem('username', JSON.stringify(action.payload.username));
      localStorage.setItem(
        'userPhoto',
        JSON.stringify(action.payload.userPhoto)
      );
    },

    setName: (state, action) => {
      localStorage.setItem('name', JSON.stringify(action.payload));
      state.name = action.payload;
    },

    setUser: (state, action) => {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.bio = profile.bio;
      state.user.photo = profile.photo;
    },
  },
});

export const { setLogin, setName, setUser } = authSlice.actions;
export const selectUserInfo = (store) => store.auth;
export default authSlice.reducer;
