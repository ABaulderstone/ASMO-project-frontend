import { AUTH_TOKEN, ERROR, REVIEW_SUBMITTED} from "./types";
import LocalAPI from "./../apis/local";

const submitReview = () => {
  return {
    type: REVIEW_SUBMITTED,
    payload: true
  }
}
export const setError = error => {
  return {
    type: ERROR,
    payload: error
  };
};
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

export const registerMember = (name, phone, email) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/customers`, {
      name,
      phone,
      email
    });
  };
};

export const reviewSubmission = (foodRating, serviceRating, comment) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/reviews`, {
      foodRating,
      serviceRating,
      comment
    });
    dispatch(submitReview());
  }
}
