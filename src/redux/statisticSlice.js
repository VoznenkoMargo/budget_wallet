import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASIC_URL = 'https://wallet.goit.ua/api';

export const getCategoriesStatistic = createAsyncThunk(
  'statistic/getCategoriesStatistic',
  async(period, {rejectWithValue}) => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzNkNDNhNS1hYjJmLTRlODgtYmI3Ni0wZjFlMGJjNWNhYjMiLCJpYXQiOjE2NDQxNTczNzgsImV4cCI6MTAwMDAwMDE2NDQxNTczNzh9.e5qXzp0wq7x1xir0unYYGBgHwBEtCxlWNEgBrp-UteU',
      }
    }

    let response;
    if(!period || (!period.year && period.month)) {
      response = await fetch(`${BASIC_URL}/transactions-summary`, options);
    } else if (!period.month) {
      response = await fetch(`${BASIC_URL}/transactions-summary?year=${period.year}`, options);
    } else {
      response = await fetch(`${BASIC_URL}/transactions-summary?month=${period.month}&year=${period.year}`, options);
    }

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
    setMonth: (state, {payload}) => {
      state.statistic.month = payload;
    },

    setYear: (state, {payload}) => {
      state.statistic.year = payload;
    },

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

export const {setMonth, setYear, addTransactionToStatistic} = StatisticSlice.actions;
export const statisticReducer = StatisticSlice.reducer;