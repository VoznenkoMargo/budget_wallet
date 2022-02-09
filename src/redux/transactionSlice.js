import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setIsModalAddTransactionOpen } from './globalSlice';

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const req = await fetch('https://wallet.goit.ua/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',
        },
        body: JSON.stringify(transaction),
      });

      if (!req.ok) {
        throw new Error("Can't create a new transaction");
      }

      const resp = await req.json();
      dispatch(addTransaction(resp));
      dispatch(setIsModalAddTransactionOpen(false));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const req = await fetch('https://wallet.goit.ua/api/transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',
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

const initialState = { transactions: [], error: null };

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction, addTransactions } = transactionSlice.actions;
export const transactionsReducer = transactionSlice.reducer;
