import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reset } from './globalSlice';
import { setIsLoading } from './globalSlice';

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (
    transaction,
    { rejectWithValue, dispatch, getState, fulfillWithValue }
  ) => {
    try {
      dispatch(setIsLoading(true));
      const { token } = getState().user;
      const req = await fetch('https://wallet.goit.ua/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(transaction),
      });

      const data = await req.json();
      if (!req.ok) {
        throw new Error(data.message);
      }
      dispatch(setIsLoading(false));
      return fulfillWithValue(data);
    } catch (err) {
      dispatch(setIsLoading(false));
      return rejectWithValue({ message: err.message });
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().user;
      const req = await fetch('https://wallet.goit.ua/api/transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const resp = await req.json();
      dispatch(addTransactions(resp));
      if (!req.ok) {
        throw new Error("Can't get all transactions");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { transactions: null, error: null };

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: {
    [createTransaction.pending]: (state) => {
      state.error = null;
    },
    [createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions.unshift(payload);
    },
    [createTransaction.rejected]: (state, { payload }) => {
      state.error = payload.message;
    },
    [reset]: (state) => initialState,
  },
});

export const { addTransactions } = transactionSlice.actions;
export const transactionsReducer = transactionSlice.reducer;
