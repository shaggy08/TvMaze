import axios from "axios";

const request = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export default request;
