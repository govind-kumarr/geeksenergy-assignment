import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movies.slice";

const rootReducer = { movies: movieReducer };

export const store = configureStore({
  reducer: rootReducer,
});
