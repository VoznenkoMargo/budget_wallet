import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
