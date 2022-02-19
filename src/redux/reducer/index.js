import { combineReducers } from "redux";
import RobotsListReducer from "./shopListReducer";

const rootReducer = combineReducers({ robots: RobotsListReducer });

export default rootReducer;
