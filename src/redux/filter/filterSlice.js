import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
