import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';
import { categoriesReducer } from './categoriesSlice';
import { globalReducer } from './globalSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
    global: globalReducer,
  },
});
