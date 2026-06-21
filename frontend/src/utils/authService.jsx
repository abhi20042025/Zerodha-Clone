import axios from "axios";

const authService = {
  signup: async (userData) => {
    const res = await axios.post("/auth/signup", userData, { withCredentials: true });
    return res.data;
  },

  login: async (credentials) => {
    const res = await axios.post("/auth/login", credentials, { withCredentials: true });
    return res.data;
  },

  logout: async () => {
    const res = await axios.post("/auth/logout", {}, { withCredentials: true });
    return res.data;
  },

  getCurrentUser: async () => {
    try {
      const res = await axios.get("/auth/user", { withCredentials: true });
      return res.data;
    } catch {
      return { loggedIn: false };
    }
  },
};

export default authService;
