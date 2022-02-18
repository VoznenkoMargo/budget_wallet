import { createAction, createSlice } from '@reduxjs/toolkit';

export const reset = createAction('reset');

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
    setIsModalLogoutOpen: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
  },
  extraReducers: {
    [reset]: (state) => initialState,
  },
});

export const {
  setIsLoading,
  setIsModalAddTransactionOpen,
  setIsModalLogoutOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
