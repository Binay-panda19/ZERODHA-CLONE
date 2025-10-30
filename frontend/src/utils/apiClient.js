import axios from "axios";
import { getAuthContext } from "./authAccessor"; // see note below

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const client = axios.create({ baseURL: API, withCredentials: true });

// We'll implement a simple interceptor that, if a 401 occurs, calls /auth/refresh and retries.
client.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalReq = err.config;
    if (err.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      try {
        // call refresh endpoint
        const refreshRes = await axios.post(
          `${API}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newAccess = refreshRes.data.accessToken;
        if (newAccess) {
          originalReq.headers["Authorization"] = `Bearer ${newAccess}`;
          return axios(originalReq); // retry
        }
      } catch (e) {
        // cannot refresh
      }
    }
    return Promise.reject(err);
  }
);

export default client;
