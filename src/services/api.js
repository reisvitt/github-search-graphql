import axios from "axios";
import https from "https";

const baseUrl = "https://api.github.com/users";

const api = axios.create({
  baseURL: baseUrl,
  httpAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default api;
