import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

const ApiService = {
  login: async (email, password) => {
    return axios.post(`${API_BASE_URL}/user/login`, { email, password });
  },

  signup: async (userData) => {
    return axios.post(`${API_BASE_URL}/user/signup`, userData);
  },

  getUserProfile: async (token) => {
    return axios.post(`${API_BASE_URL}/user/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  
  updateUserProfile: async (token, userData) => {
    return axios.put(`${API_BASE_URL}/user/profile`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

};

export default ApiService;
