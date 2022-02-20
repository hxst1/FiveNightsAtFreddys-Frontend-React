import { combineReducers } from "redux";
import robotsListReducer from "./robotsListReducer";

const rootReducer = combineReducers({ robotsList: robotsListReducer });

export default rootReducer;
