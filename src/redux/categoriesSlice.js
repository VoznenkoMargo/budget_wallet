import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userSelector } from './userSlice';
import { useSelector } from 'react-redux';

export const getTransactionCategories = createAsyncThunk(
  'categories/getTransactionCategory',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const req = await fetch(
        'https://wallet.goit.ua/api/transaction-categories',

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',

            //   Authorization:
            //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1NDExNTNiZS00NWZlLTRiYmMtOTkxNy1hNmJiOWJmMzM4YjMiLCJpYXQiOjE2NDUwMDk3OTgsImV4cCI6MTAwMDAwMDE2NDUwMDk3OTh9.7YZM8pSm3XufIdm5g0XvUPPA2CtpEr-A7XBiUI-EAxI',
          },
        },
      );
      const resp = await req.json();
      dispatch(addCategories(resp));
      if (!req.ok) {
        throw new Error("Can't create get transaction categories");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
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
});

export const { addCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
