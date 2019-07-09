import { AUTH_TOKEN, ERROR } from "./../actions/types";

const defaultState = {
  token: sessionStorage.getItem("token") || null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return { ...state, token: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
