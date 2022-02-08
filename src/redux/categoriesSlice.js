import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoading } from './globalSlice';

export const getTransactionCategory = createAsyncThunk(
  'categories/getTransactionCategory',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setIsLoading(true));
      const req = await fetch(
        'https://wallet.goit.ua/api/transaction-categories',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',
          },
        }
      );
      const resp = await req.json();
      dispatch(getTransaction(resp));
      dispatch(setIsLoading(false));
      if (!req.ok) {
        throw new Error("Can't create get transaction categories");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { categories: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getTransaction: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getTransaction } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
