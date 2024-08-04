import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import errorReducer from "../features/error/errorSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
