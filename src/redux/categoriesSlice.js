import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reset } from './globalSlice';
import { setIsLoading } from './globalSlice';
import { BASE_URL } from 'constants/api';

export const getTransactionCategories = createAsyncThunk(
  'categories/getTransactionCategory',
  async (_, { rejectWithValue, fulfillWithValue, dispatch, getState }) => {
    try {
      dispatch(setIsLoading(true));
      const { token } = getState().user;
      const req = await fetch(`${BASE_URL}transaction-categories`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const resp = await req.json();
      if (!req.ok) {
        throw new Error(resp.message);
      }
      return fulfillWithValue(resp);
    } catch (error) {
      dispatch(setIsLoading(false));
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { categories: null };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [getTransactionCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [reset]: (state) => initialState,
  },
});

export const { addCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
