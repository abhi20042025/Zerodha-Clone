import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

const authService = {
  signup: async (userData) => {
    const res = await axios.post(`${API_URL}/auth/signup`, userData, {
      withCredentials: true,
    });
    return res.data;
  },

  login: async (credentials) => {
    const res = await axios.post(`${API_URL}/auth/login`, credentials, {
      withCredentials: true,
    });
    return res.data;
  },

  logout: async () => {
    const res = await axios.post(`${API_URL}/auth/logout`, {}, {
      withCredentials: true,
    });
    return res.data;
  },

  getCurrentUser: async () => {
    try {
      const res = await axios.get(`${API_URL}/auth/user`, {
        withCredentials: true,
      });
      return res.data;
    } catch {
      return { loggedIn: false };
    }
  },
};

export default authService;