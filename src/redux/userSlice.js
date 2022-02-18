import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoading } from './globalSlice';

export const signupUser = createAsyncThunk(
  'auth/sign-up',
  async (
    { username, email, password },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch('https://wallet.goit.ua/api/auth/sign-up', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
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

export const loginUser = createAsyncThunk(
  'auth/sign-in',
  async (
    { email, password },
    { dispatch, fulfillWithValue, rejectWithValue }
  ) => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch('https://wallet.goit.ua/api/auth/sign-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
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

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, fulfillWithValue, getState }) => {
    try {
      const { token } = getState().user;
      const response = await fetch('https://wallet.goit.ua/api/users/current', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  isAuth: false,
  error: null,
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: () => initialState,
    updateBalance: (state, { payload }) => {
      state.user.balance += payload;
    },
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.error = null;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.token = payload.token;
      state.user = payload.user;
      state.isAuth = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.error = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.token = payload.token;
      state.user = payload.user;
      state.isAuth = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload.message;
    },
    [getCurrentUser.pending]: (state) => {
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
    },
    [getCurrentUser.rejected]: (state, payload) => {
      state.error = payload.message;
    },
  },
});

export const { clearState, updateBalance } = userSlice.actions;
export const userSelector = (state) => state.user;
export const userReducer = userSlice.reducer;
