import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: rootReducer,
  },
});
