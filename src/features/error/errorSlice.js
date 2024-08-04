// src/features/error/errorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: "",
  },
  reducers: {
    setGlobalError: (state, action) => {
      state.message = action.payload;
    },
    clearGlobalError: (state) => {
      state.message = "";
    },
  },
});

export const { setGlobalError, clearGlobalError } = errorSlice.actions;

export default errorSlice.reducer;
