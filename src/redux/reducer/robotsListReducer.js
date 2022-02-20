import actionTypes from "../actions/actionTypes";

const robotsListReducer = (robotsList = [], action = {}) => {
  let newRobot;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobot = [...action.robotsList];
      break;
    default:
      newRobot = [...robotsList];
  }
  return newRobot;
};

export default robotsListReducer;
