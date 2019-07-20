import {
  AUTH_TOKEN,
  ERROR,
  REVIEW_SUBMITTED,
  SET_ADDRESS,
  MEMBER_SUMBITTED,
  SET_COMMENTS,
  SET_CUSTOMERS,
  SET_STAFF
} from "./types";

import LocalAPI from "./../apis/local";



const setCustomers = customers => {
  return {
    type: SET_CUSTOMERS,
    payload: customers
  };
};

export const setAddress = address => {
  console.log(address);
  return {
    type: SET_ADDRESS,
    payload: address
  };
};

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
    const response = await LocalAPI.post(`/auth/register`, {
      email,
      password,
      confrimPassword
    });
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



export const newStaffSubmission = (name, avatar) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.post(`/staff`, {
      name,
      avatar
    });
  };
};

;
  };
};

// export const ForgotPasswordSubmission = (email) => {
//   return async (dispatch, getState) => {
//     const response = await LocalAPI.get(), {
//       email
//     }
//   }
// }



export const fetchComments = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/reviews");
    dispatch({
      type: SET_COMMENTS,
      payload: response.data
    });
  };
};

export const searchCustomerByNumber = phone => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get(`/customers?phone=${phone}`);
    dispatch(setCustomers(response.data));
  };
};

export const fetchStaff = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/staff");
    dispatch({
      type: SET_STAFF,
      payload: response.data
    });
  };
};

// export const editStaff = (id, name) => {
//   return async (dispatch, getState) => {
//     const response = await LocalAPI.put(`/staff/${id}`, { name });
//     dispatch({});
//   };
// };
