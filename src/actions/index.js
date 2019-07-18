import { AUTH_TOKEN, ERROR, REVIEW_SUBMITTED} from "./types";
import LocalAPI from "./../apis/local";
import { async } from "q";

const submitReview = (pload) => {
  return {
    type: REVIEW_SUBMITTED,
    payload: pload
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

// export const ForgotPasswordSubmission = (email) => {
//   return async (dispatch, getState) => {
//     const response = await LocalAPI.get(), {
//       email
//     }
//   }
// }

export const resetReview = () => {
  return (dispatch, getState) => { 
    dispatch(submitReview(false));
  }
}
  


