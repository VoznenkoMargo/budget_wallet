import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';
import { categoriesReducer } from './categoriesSlice';
import { globalReducer } from './globalSlice';
import { statisticsReducer } from './statisticsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
    statistics: statisticsReducer,
    global: globalReducer,
  },
});
