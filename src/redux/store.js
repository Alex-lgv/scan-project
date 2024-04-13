import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from './slices/userInfoSlice';
import companySlice from './slices/companySlice';
import docsSlice from './slices/docsSlice';
import errorSlice from './slices/errorSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    company: companySlice,
    docs: docsSlice,
    error: errorSlice,
  },
});

export default store;
