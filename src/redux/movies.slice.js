import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  isAuth: false,
  username: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loginSuccessFull: (state, action) => {
      state.isAuth = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {},
});
export const { loginSuccessFull, logout } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
