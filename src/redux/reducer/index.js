import { combineReducers } from "redux";
import RobotsListReducer from "./RobotsListReducer";

const rootReducer = combineReducers({ robots: RobotsListReducer });

export default rootReducer;
