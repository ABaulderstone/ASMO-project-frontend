import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import reviewReducer from "./review_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    review: reviewReducer
});