import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const transactionSlice = createSlice({
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
});

export const {
  setIsLoading,
  setIsModalAddTransactionOpen,
  setIsModalLogoutOpen,
} = transactionSlice.actions;
export const globalReducer = transactionSlice.reducer;
