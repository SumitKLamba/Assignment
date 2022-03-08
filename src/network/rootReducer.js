import { combineReducers } from "redux";
import BlogsReducer from "./reducer";

const rootReducer = combineReducers({
    blogs: BlogsReducer,
});

export default rootReducer;