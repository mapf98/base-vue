import axios from "axios";

export const API_URL = axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default API_URL;
