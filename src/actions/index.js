import { AUTH_TOKEN, ERROR, REVIEW_SUBMITTED, SET_ADDRESS, MEMBER_SUMBITTED} from "./types";
import LocalAPI from "./../apis/local";
import { async } from "q";


const submitMember = (boolean) => {
  return {
    type: MEMBER_SUMBITTED,
    payload: boolean
  }
}

const submitReview = (boolean) => {
  return {
    type: REVIEW_SUBMITTED,
    payload: boolean
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

export const registerMember = (name, phone, email, address) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/customers`, {
      name,
      phone,
      email,
      address
    });
    dispatch(submitMember(true));
  };
};

export const newStaffSubmission = (name, avatar) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/staff`, {
      name,
      avatar
    })
  }
}

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

export const resetMember = () => {
  return (dispatch, getState) => { 
    dispatch(submitMember(false));
  }
}
  


