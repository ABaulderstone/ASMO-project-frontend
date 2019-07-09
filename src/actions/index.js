import{ AUTH_TOKEN, ERROR } from "./types";
import LocalAPI from "./../apis/local";

export const setError = error => {
  return {
    type: ERROR,
    payload: error
  }
}
export const setAuthToken = token => {
  sessionStorage.setItem("token", token);
  return {
    type: AUTH_TOKEN,
    payload: token
  };
};

export const registerUser = (email, password) => {
  return async (dispatch, getState) => {
    try{
    const response = await LocalAPI.post(`/auth/register`, { email, password });
    const { token } = response.data;
    dispatch(setAuthToken(token));
    }
    catch(error) {
      dispatch(setError(error));
    }
   
  };
};

export const loginUser = (email, password) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/auth/login`, { email, password });
        const { token } = response.data;
        dispatch(setAuthToken(token));
      };
};
