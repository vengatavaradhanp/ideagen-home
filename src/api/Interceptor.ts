import axios from "axios";

const baseURL = "https://reqres.in/api/";

axios.defaults.baseURL = baseURL;

const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use((config) => {
  let token = true;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  } else {
    return config;
  }
});

export default AxiosInstance;
