import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reset } from './globalSlice';
import { setIsLoading } from './globalSlice';
import { BASE_URL } from 'constants/api';

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (
    transaction,
    { rejectWithValue, dispatch, getState, fulfillWithValue }
  ) => {
    try {
      dispatch(setIsLoading(true));
      const { token } = getState().user;
      const req = await fetch(`${BASE_URL}transactions`, {
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
      dispatch(setIsLoading(true));
      const { token } = getState().user;
      const req = await fetch(`${BASE_URL}transactions`, {
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
      dispatch(addTransactions(resp));
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { transactions: null, error: null, isCreated: null };

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetIsCreated: (state) => {
      state.isCreated = null;
    },
  },
  extraReducers: {
    [createTransaction.pending]: (state) => {
      state.error = null;
    },
    [createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions.unshift(payload);
      state.isCreated = true;
    },
    [createTransaction.rejected]: (state, { payload }) => {
      state.error = payload.message;
    },
    [reset]: (state) => initialState,
  },
});

export const { addTransactions, resetError, resetIsCreated } =
  transactionSlice.actions;
export const transactionsReducer = transactionSlice.reducer;
