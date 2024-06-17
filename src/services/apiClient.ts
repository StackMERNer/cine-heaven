import axios from "axios";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "en-US",
  },
});

export default apiClient;
