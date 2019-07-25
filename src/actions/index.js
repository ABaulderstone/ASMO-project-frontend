import {
  AUTH_TOKEN,
  ERROR,
  SET_ADDRESS,
  SET_COMMENTS,
  SET_CUSTOMERS,
  SET_STAFF,
  SET_CHART_DATA
} from "./types";

import LocalAPI from "./../apis/local";
const setChartData = (response) => {
  return {
    type: SET_CHART_DATA,
    payload: response.data
  }
}
const setCustomers = customers => {
  return {
    type: SET_CUSTOMERS,
    payload: customers
  };
};

export const setAddress = address => {
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
const setAuthToken = token => {
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
    const response = await LocalAPI.post(`/staff`, {name,avatar}) 
    dispatch({
        type: SET_STAFF,
        payload: response.data
      });
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

export const fetchCustomers = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/customers");
    const customers = response.data;
    dispatch(setCustomers(customers));
  };
};

// export const editStaff = (id, name) => {
//   return async (dispatch, getState) => {
//     const response = await LocalAPI.put(`/staff/${id}`, { name });
//     dispatch({});
//   };
// };

export const deleteStaff = id => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.delete(`/staff/${id}`);
    dispatch({
      type: SET_STAFF,
      payload: response.data
    });
  };
};

export const deleteCustomer = id => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.delete(`/customers/${id}`);
    dispatch({
      type: SET_CUSTOMERS,
      payload: response.data
    });
  };
};

export const fetchChartData = () => {
  return async(dispatch, getState) => {
    const response = await LocalAPI.get("/stats");
    dispatch(setChartData(response));
  }
}
