// src/api/baseQuery.js
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, removeToken } from "../utils/tokenUtils";
import { store } from "../store"; // Import your Redux store
import { setGlobalError } from "../features/error/errorSlice"; // Action to set global error

const baseQuery = fetchBaseQuery({
  baseUrl: "https://your-api-url.com",
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const customBaseQuery = async (args, api, extraOptions) => {
  try {
    const result = await baseQuery(args, api, extraOptions);

    // Handle token expiration (e.g., 401 status code)
    if (result.error && result.error.status === 401) {
      // Handle token expiration logic here
      removeToken(); // Clear the expired token
      store.dispatch(
        setGlobalError("Your session has expired. Please log in again.")
      );
      // Optionally, redirect to login page
      window.location.href = "/login";
    }

    return result;
  } catch (error) {
    store.dispatch(
      setGlobalError("An unexpected error occurred. Please try again later.")
    );
    return { error: { message: error.message } };
  }
};
