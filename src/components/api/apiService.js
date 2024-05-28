// src/services/apiService.js
import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Adjust based on your token storage strategy
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle error based on status code
      if (error.response.status === 401) {
        // Handle unauthorized error, e.g., redirect to login
        window.location.href = '/login'; // Adjust based on your routing
      }
    }
    return Promise.reject(error);
  }
);

// Function to handle GET requests
const get = (url, config = {}) => api.get(url, config);

// Function to handle POST requests
const post = (url, data, config = {}) => api.post(url, data, config);

// Function to handle PUT requests
const put = (url, data, config = {}) => api.put(url, data, config);

// Function to handle DELETE requests
const del = (url, config = {}) => api.delete(url, config);

export { get, post, put, del };
