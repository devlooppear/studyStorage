import axios from "axios";

const apiURL = import.meta.env.VITE_BACK_URL;
const apiService = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;