import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';
import { categoriesReducer } from './categoriesSlice';
import { globalReducer } from './globalSlice';
import { statisticReducer } from './statisticSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
    statistic: statisticReducer,
    global: globalReducer,
  },
});
