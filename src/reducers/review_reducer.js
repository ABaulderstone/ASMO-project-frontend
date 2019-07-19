import { REVIEW_SUBMITTED, SET_COMMENTS } from "./../actions/types";

const defaultState = {
  reviews: [],
  isSubmitted: null
};

// added error case to handle server errors surrounding login and register  

export default (state = defaultState, action) => {
  switch (action.type) {
    case REVIEW_SUBMITTED:
        return {...state, isSubmitted: action.payload};
    case SET_COMMENTS: 
    return {...state, reviews: action.payload};
    
    default: 
    return state;

  }
};
