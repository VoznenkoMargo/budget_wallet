import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const signupUser = createAsyncThunk(
   "auth/sign-up",
   async ({ username, email, password }, thunkAPI) => {
      try {
         const response = await fetch(
            "https://wallet.goit.ua/api/auth/sign-up",
            {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  username,
                  email,
                  password,
               }),
            }
         )
         let data = await response.json()
         console.log("data", data)
         if (response.status === 201) {
            localStorage.setItem("token", data.token)
            //return { ...data, username: username, email: email }
            return thunkAPI.fulfillWithValue({ ...data, username: username, email: email })
         } else {
            return thunkAPI.rejectWithValue(data)
         }
      } catch (e) {
         console.log("Error", e.response.data)
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const loginUser = createAsyncThunk(
   "auth/sign-in",
   async ({ email, password }, thunkAPI) => {
      try {
         const response = await fetch(
            "https://wallet.goit.ua/api/auth/sign-in",
            {
               method: "POST",
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  email,
                  password,
               }),
            }
         )
         let data = await response.json()
         console.log("response", data)
         if (response.status === 201) {
            localStorage.setItem("token", data.token)
            return thunkAPI.fulfillWithValue(data)
         } else {
            return thunkAPI.rejectWithValue(data)
         }
      } catch (e) {
         console.log("Error", e.response.data)
         thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const fetchUserBytoken = createAsyncThunk(
   'users/current',
   async ({ token }, thunkAPI) => {
      try {
         const response = await fetch(
            'https://wallet.goit.ua/api/users/current',
            {
               method: 'GET',
               headers: {
                  Accept: 'application/json',
                  Authorization: token,
                  'Content-Type': 'application/json',
               },
            }
         );
         let data = await response.json();
         console.log('data', data, response.status);

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

export const userSlice = createSlice({
   name: "user",
   initialState: {
      username: "",
      email: "",
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      token: "",
      balance: "",
   },
   reducers: {
      clearState: (state) => {
         state.isError = false;
         state.isSuccess = false;
         state.isFetching = false;

         return state;
      },

      updateBalance: (state, {payload}) => {
         state.balance += payload;
      }
   },
   extraReducers: {
      [signupUser.fulfilled]: (state, { payload }) => {
         console.log('payload', payload);
         state.isFetching = false;
         state.isSuccess = true;
         state.email = payload.user.email;
         state.username = payload.user.username;
         state.token = payload.token;
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
})
export const { clearState, updateBalance } = userSlice.actions;
export const userSelector = state => state.user;
export const userReducer = userSlice.reducer;