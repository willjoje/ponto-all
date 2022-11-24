import axios from "axios";

const api = axios.create({
  baseURL: "https://5583-2804-14d-5480-93ed-7989-b156-c738-dad9.ngrok.io/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
