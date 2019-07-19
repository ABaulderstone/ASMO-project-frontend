import { SET_CUSTOMERS} from "./../actions/types";

const defaultState = []

// added error case to handle server errors surrounding login and register  

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return action.payload;
 
    default:
      return state;
  }
};