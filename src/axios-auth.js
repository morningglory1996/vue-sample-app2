import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/vuejs-http-df3a2/databases/(default)/documents",
});

instance.interceptors.request.use(
  (config) => {
    console.log("instance interceptors", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
