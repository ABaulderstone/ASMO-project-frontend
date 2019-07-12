import axios from "axios";
import history from "./../history";
import store from "./../store";

const LocalAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

LocalAPI.interceptors.request.use(request => {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

LocalAPI.interceptors.response.use(
  response => response,
  error => {
    let loginPage = false;
    if (/\/login/.test(error.response.config.url)) {
      loginPage = true;
    }

    if (error.response.status === 401 && !loginPage) {
      sessionStorage.removeItem("token");
      LocalAPI.defaults.headers.common["Authorization"] = null;
      history.push("/");
    } else if (error.response.status === 401) {
      console.log("You came from the login page");
    }

    return Promise.reject(error);
  }
);

export default LocalAPI;
