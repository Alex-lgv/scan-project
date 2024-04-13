import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  INN: '',
  limit: '10',
  tonality: 'any',
  maxFullness: false,
  inBusinessNews: false,
  onlyMainRole: false,
  onlyWithRiskFactors: false,
  isTechNews: false,
  isAnnouncement: false,
  isDigest: false,
  startDate: '2019-01-01',
  endDate: '2024-08-31',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setINN: (state, action) => {
      state.INN = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setTonality: (state, action) => {
      state.tonality = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setMaxFullness: (state) => {
      state.maxFullness = !state.maxFullness;
    },
    setInBusinessNews: (state) => {
      state.inBusinessNews = !state.inBusinessNews;
    },
    setOnlyMainRole: (state) => {
      state.onlyMainRole = !state.onlyMainRole;
    },
    setOnlyWithRiskFactors: (state) => {
      state.onlyWithRiskFactors = !state.onlyWithRiskFactors;
    },
    setIsTechNews: (state) => {
      state.isTechNews = !state.isTechNews;
    },
    setIsAnnouncement: (state) => {
      state.isAnnouncement = !state.isAnnouncement;
    },
    setIsDigest: (state) => {
      state.isDigest = !state.isDigest;
    },
  },
});

export default companySlice.reducer;

export const {
  setINN,
  setLimit,
  setTonality,
  setMaxFullness,
  setInBusinessNews,
  setOnlyMainRole,
  setOnlyWithRiskFactors,
  setIsTechNews,
  setIsAnnouncement,
  setIsDigest,
  setStartDate,
  setEndDate,
} = companySlice.actions;

export const selectINN = (state) => state.company.INN;
export const selectLimit = (state) => state.company.limit;
export const selectTonality = (state) => state.company.tonality;
export const selectMaxFullness = (state) => state.company.maxFullness;
export const selectInBusinessNews = (state) => state.company.inBusinessNews;
export const selectOnlyMainRole = (state) => state.company.onlyMainRole;
export const selectOnlyWithRiskFactors = (state) =>
  state.company.onlyWithRiskFactors;
export const selectIsTechNews = (state) => state.company.isTechNews;
export const selectIsAnnouncement = (state) => state.company.isAnnouncement;
export const selectIsDigest = (state) => state.company.isDigest;
export const selectStartDate = (state) => state.company.startDate;
export const selectEndDate = (state) => state.company.endDate;
