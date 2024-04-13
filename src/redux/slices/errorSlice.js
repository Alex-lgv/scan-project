import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default errorSlice.reducer;

export const { setError } = errorSlice.actions;

export const selectError = (state) => state.error;
