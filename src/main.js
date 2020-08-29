import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-df3a2/databases/(default)/documents";

// axios.defaults.headers.common['Authorization'] = "token"

axios.interceptors.request.use(
  (config) => {
    console.log("interceptor request", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log("interceptor response", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
