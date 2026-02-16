import axios from 'axios';

export const API_URL = process.env.API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message;
    
    return Promise.reject(new Error(errorMessage));
  }
);