import { SET_STAFF } from "./../actions/types";

const defaultState = [];
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_STAFF:
      return action.payload;
    default:
      return state;
  }
};
