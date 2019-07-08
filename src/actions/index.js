import{ AUTH_TOKEN } from "./types";
import LocalAPI from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);
  return {
    type: AUTH_TOKEN,
    payload: token
  };
};

export const registerUser = (email, password) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/auth/register`, { email, password });
    const { token } = response.data;
    dispatch(setAuthToken(token));
  };
};

export const loginUser = (email, password) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/auth/login`, { email, password });
        const { token } = response.data;
        dispatch(setAuthToken(token));
      };
};
