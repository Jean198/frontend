import { createSlice } from '@reduxjs/toolkit';
let userImage = localStorage.getItem('userPhoto');
let name = localStorage.getItem('name');

try {
  const userPhoto = JSON.parse(userImage);
  const username = JSON.parse(name);
  userImage = userPhoto;
  name = username;
} catch (err) {
  console.log('Error: ', err.message);
}

const initialState = {
  isLoggedIn: false,
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
      state.isLoggedIn = action.payload;
    },

    setUserImage: (state, action) => {
      state.user.photo = action.payload;
      localStorage.setItem('userPhoto', JSON.stringify(action.payload));
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

export const { setLogin, setName, setUser, setUserImage } = authSlice.actions;
export const selectUserInfo = (store) => store.auth;
export default authSlice.reducer;
