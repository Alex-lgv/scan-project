import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setDocs: (state, action) => {
      action.payload.forEach((doc) => {
        state.push(doc);
      });
    },
    clearDocs: () => {
      return initialState;
    },
  },
});

export default docsSlice.reducer;

export const { setDocs, clearDocs } = docsSlice.actions;

export const selectDocs = (state) => state.docs;
