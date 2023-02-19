import { createSlice } from '@reduxjs/toolkit';

let loginStatus = localStorage.getItem('isLoggedIn');
let userImage = localStorage.getItem('userPhoto');
let name = localStorage.getItem('name');

try {
  const isLoggedIn = JSON.parse(loginStatus);
  const userPhoto = JSON.parse(userImage);
  const username = JSON.parse(name);
  loginStatus = isLoggedIn;
  userImage = userPhoto;
  name = username;
} catch (err) {
  console.log('Error: ', err.message);
}

const initialState = {
  isLoggedIn: loginStatus ? loginStatus : false,
  name: name ? name : '',
  user: {
    name: '',
    email: '',
    phone: '',
    bio: '',
    photo: userImage ? userImage : '',
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
      //localStorage.setItem('username', JSON.stringify(action.payload.username));
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
