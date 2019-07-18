import { MEMBER_SUMBITTED } from "./../actions/types";

const defaultState = {
 isSubmitted: null
};

// added error case to handle server errors surrounding login and register  

export default (state = defaultState, action) => {
  switch (action.type) {
    case MEMBER_SUMBITTED:
        return {...state, isSubmitted: action.payload};
    default: 
    return state;

  }
};
