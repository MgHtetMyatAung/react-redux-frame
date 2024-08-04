// src/utils/tokenUtils.js
import { encryptData, decryptData } from "./crypto";

// Store token in localStorage
export const setToken = (token) => {
  const encryptedToken = encryptData(token);
  localStorage.setItem("access_token", encryptedToken);
};

// Retrieve token from localStorage
export const getToken = () => {
  const encryptedToken = localStorage.getItem("access_token");
  return encryptedToken ? decryptData(encryptedToken) : null;
};
