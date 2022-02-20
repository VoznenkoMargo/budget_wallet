import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionSlice';
import { userReducer } from './userSlice';
import { categoriesReducer } from './categoriesSlice';
import { globalReducer } from './globalSlice';
import { statisticsReducer } from './statisticsSlice';
import { createLogger } from 'redux-logger';
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

const logger = createLogger({ collapsed: true });

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: persistReducer(authPersistConfig, userReducer),
    categories: categoriesReducer,
    statistics: statisticsReducer,
    global: globalReducer,
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }
    return middlewares;
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
