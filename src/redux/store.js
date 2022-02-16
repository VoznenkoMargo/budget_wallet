import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';
import { userReducer } from './userSlice';
import { categoriesReducer } from './categoriesSlice';
import { globalReducer } from './globalSlice';
import { statisticsReducer } from './statisticsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: persistReducer(authPersistConfig, userReducer),
    // user: userReducer,
    categories: categoriesReducer,
    statistics: statisticsReducer,
    global: globalReducer,
  },
});

export const persistor = persistStore(store);
