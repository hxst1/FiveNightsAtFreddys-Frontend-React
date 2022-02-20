import actionTypes from "../actions/actionTypes";

const robotsListReducer = (robotsList = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robotsList];
      break;
    case actionTypes.createRobot:
      newRobots = [...robotsList, action.NewRobot];
      break;
    default:
      newRobots = [...robotsList];
  }
  return newRobots;
};

export default robotsListReducer;
