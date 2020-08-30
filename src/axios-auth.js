import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

// instance.interceptors.request.use(
//   (config) => {
//     console.log("instance interceptors", config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;
