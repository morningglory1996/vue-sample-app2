import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store/index";

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

store.dispatch("autoLogin").then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
