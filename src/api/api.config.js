import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.data.status === "200") {
    }
    return response;
  },
  function (error) {
    if (!error.response) {
      return Promise.reject({
        response: {
          status: 500,
          message: "Something went wrong.",
        },
      });
    } else {
      return Promise.reject(error);
    }
  }
);
