import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().user;
      const req = await fetch('https://wallet.goit.ua/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(transaction),
      });

      if (!req.ok) {
        throw new Error("Can't create a new transaction");
      }

      const resp = await req.json();
      dispatch(addTransaction(resp));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
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
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },
  },
});

export const { addTransaction, addTransactions } = transactionSlice.actions;
export const transactionsReducer = transactionSlice.reducer;
