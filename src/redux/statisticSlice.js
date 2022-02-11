import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategoriesStatistic = createAsyncThunk(
  'statistic/getCategoriesStatistic',
  async(_, {rejectWithValue}) => {
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
      return rejectWithValue(await response.json());
    }
    return await response.json();
  }
)

const generateUniqueColor = (usedColors) => {
  let color = null;
  while(!color || usedColors.includes(color)){
    color = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  }
  return color;
}

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
        const usedColors = [];
        payload['categoriesSummary'] = payload['categoriesSummary']
          .map(elem => {
            const color = generateUniqueColor(usedColors);
            usedColors.push(color);
            return {...elem, color}
          })
        state.statistic = payload;
      })

      .addCase(getCategoriesStatistic.rejected, (state, action) => {
        state.error = action.payload.message;
      })
  }
})

export const {addTransactionToStatistic} = StatisticSlice.actions;
export const statisticReducer = StatisticSlice.reducer;