import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { basicCategoriesColors } from 'components/DiagramTab/categoriesColors';
import { reset } from './globalSlice';
import { BASE_URL } from 'constants/api';

export const getCategoriesStatistics = createAsyncThunk(
  'statistics/getCategoriesStatistics',
  async (period, { rejectWithValue, getState }) => {
    const { token } = getState().user;
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    };

    let queryString = '';
    if (period?.year && period?.month) {
      queryString = `month=${period.month}&year=${period.year}`;
    } else if (period && !period?.month) {
      queryString = `year=${period.year}`;
    }
    const response = await fetch(
      `${BASE_URL}transactions-summary?${queryString}`,
      options
    );

    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    return await response.json();
  }
);

const initialState = {
  statistics: null,
  error: null,
};

const StatisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setMonth: (state, { payload }) => {
      state.statistics.month = payload;
    },

    setYear: (state, { payload }) => {
      state.statistics.year = payload;
    },

    addTransactionToStatistics: (state, { payload }) => {
      const { transaction, categoryName } = payload;

      if (transaction.type === 'INCOME') {
        state.statistics.incomeSummary += transaction.amount;
      } else {
        state.statistics.expenseSummary += transaction.amount;
      }

      state.statistics.periodTotal += transaction.amount;

      const stateCategory = state.statistics['categoriesSummary'].find(
        (category) => category.name === categoryName
      );
      if (stateCategory) {
        stateCategory.total += transaction.amount;
      } else {
        const category = {
          name: categoryName,
          type: transaction.type,
          total: transaction.amount,
          color: basicCategoriesColors[categoryName] || '#000000',
        };
        state.statistics['categoriesSummary'].push(category);
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getCategoriesStatistics.fulfilled, (state, { payload }) => {
        payload['categoriesSummary'] = payload['categoriesSummary'].map(
          (elem) => {
            const color = basicCategoriesColors[elem.name];
            return color ? { ...elem, color } : { ...elem, color: '#000000' };
          }
        );
        state.statistics = payload;
      })

      .addCase(getCategoriesStatistics.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        } else if (action.error) {
          state.error = action.error.message;
        } else {
          state.error = 'Unknown error';
        }
      })

      .addCase(reset, (state) => initialState);
  },
});

export const { setMonth, setYear, addTransactionToStatistics } =
  StatisticsSlice.actions;
export const statisticsReducer = StatisticsSlice.reducer;
