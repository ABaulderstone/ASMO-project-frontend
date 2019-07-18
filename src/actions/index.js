import { AUTH_TOKEN, ERROR, REVIEW_SUBMITTED, SET_ADDRESS} from "./types";
import LocalAPI from "./../apis/local";
import stringifyAddress from "./../../src/utility/stringifyAddress"

const submitReview = (pload) => {
  return {
    type: REVIEW_SUBMITTED,
    payload: pload
  }
}

 export const setAddress = (address) => {
  console.log(address);
  return {
    type: SET_ADDRESS,
    payload: address
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

export const registerUser = (email, password, confrimPassword) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/auth/register`, { email, password, confrimPassword });
    const { token } = response.data;
    dispatch(setAuthToken(token));
  };
};

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/auth/login`, { email, password, });
    const { token } = response.data;
    dispatch(setAuthToken(token));
  };
};

export const registerMember = (name, phone, email, unit, add) => {
  const address = stringifyAddress(unit, add)
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/customers`, {
      name,
      phone,
      email,
      address
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
    dispatch(submitReview(true));
  }
}

export const resetReview = () => {
  return (dispatch, getState) => { 
    dispatch(submitReview(false));
  }
}
  


