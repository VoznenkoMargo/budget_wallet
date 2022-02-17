import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTransactionCategories = createAsyncThunk(
  'categories/getTransactionCategory',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().user;
      const req = await fetch(
        'https://wallet.goit.ua/api/transaction-categories',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        }
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
});

export const { addCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
