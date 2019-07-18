import { SET_ADDRESS } from "./../actions/types";

const defaultState = {
  address: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
