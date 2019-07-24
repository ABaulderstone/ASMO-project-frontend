import { SET_CHART_DATA} from "./../actions/types";

const defaultState = []

// added error case to handle server errors surrounding login and register  

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHART_DATA:
      return action.payload;
 
    default:
      return state;
  }
};