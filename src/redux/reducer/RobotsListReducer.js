import actionTypes from "../actions/actionTypes";

const robotsListReducer = (currentRobotsList = [], action = {}) => {
  let newList;

  switch (action.type) {
    case actionTypes.loadRobots:
      newList = [...action.robots];
      break;
    default:
      newList = [...currentRobotsList];
  }
  return newList;
};

export default robotsListReducer;
