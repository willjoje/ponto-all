import axios from "axios";

const api = axios.create({
  baseURL: "https://5cb5-45-183-127-200.sa.ngrok.io/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
