import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'auth/sign-up',
  async ({ username, email, password }, thunkAPI) => {
    try {
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
      console.log(response);
      const data = await response.json();
      if (response.status === 201) {
        return thunkAPI.fulfillWithValue({
          ...data,
          username: username,
          email: email,
        });
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/sign-in',
  async ({ email, password }, thunkAPI) => {
    try {
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
      console.log('response js56', data.token);
      if (response.status === 201) {
        return thunkAPI.fulfillWithValue(data);
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  'users/current',
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch('https://wallet.goit.ua/api/users/current', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      let data = await response.json();
      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  token: null,
  balance: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: () => initialState,
    updateBalance: (state, { payload }) => {
      state.balance += payload;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.token = payload.token;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      console.log(state.token);
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    //  [logoutUser.fulfilled]: (state, { payload }) => {
    //    state.email = '';
    //    state.username = '';
    //    state.token = '';
    //    state.isFetching = false;
    //    state.isSuccess = true;
    //    state.isLoggedIn = false;
    //    // console.log(state.isLoggedIn);
    //    console.log(state.token);
    //    return state;
    //  },
    //  [logoutUser.rejected]: (state, { payload }) => {
    //    console.log('payload', payload);
    //    state.isFetching = false;
    //    state.isError = true;
    //    state.errorMessage = payload.message;
    //  },
    //  [logoutUser.pending]: state => {
    //    state.isFetching = true;
    //  },
    [fetchUserBytoken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.email = payload.email;
      state.username = payload.username;
      state.balance = payload.balance;
    },
    [fetchUserBytoken.rejected]: (state) => {
      console.log('fetchUserBytoken');
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const { clearState, updateBalance } = userSlice.actions;
export const userSelector = (state) => state.user;
export const userReducer = userSlice.reducer;
