import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategoriesStatistic = createAsyncThunk(
  'statistic/getCategoriesStatistic',
  async() => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',
      }
    }
    const response  = await fetch('https://wallet.goit.ua/api/transactions-summary', options);
    if (!response.ok) {
      return Error("Can't get statistic");
    }
    return await response.json();
  }
)

const initialState = {
  statistic: null,
  error: null,
}

const StatisticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    addTransactionToStatistic: (state, {payload}) => {
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getCategoriesStatistic.fulfilled, (state, {payload}) => {
        state.statistic = payload;
      })
      .addCase(getCategoriesStatistic.rejected, (state, action) => {
        state.error = action.error.message;
      })
  }
})

export const {addTransactionToStatistic} = StatisticSlice.actions;
export const statisticReducer = StatisticSlice.reducer;