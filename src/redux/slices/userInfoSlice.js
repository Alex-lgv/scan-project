import { createSlice } from '@reduxjs/toolkit';

const initialState = { login: '', password: '', isLoading: false };

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setExpire: (state, action) => {
      state.expire = action.payload;
    },
    setAccountInfo: (state, action) => {
      state.accountInfo = action.payload;
    },
    clearLoginAndPassword: (state) => {
      state.login = '';
      state.password = '';
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export default userInfoSlice.reducer;

export const {
  setLogin,
  setPassword,
  setAccessToken,
  setExpire,
  setAccountInfo,
  clearLoginAndPassword,
  setIsLoading,
} = userInfoSlice.actions;

export const selectLoginInfo = (state) => state.userInfo.login;
export const selectPasswordInfo = (state) => state.userInfo.password;
export const selectAccessTokenInfo = (state) => state.userInfo.accessToken;
export const selectExpireInfo = (state) => state.userInfo.expire;
export const selectAccountInfo = (state) => state.userInfo.accountInfo;
export const selectIsLoading = (state) => state.userInfo.isLoading;
