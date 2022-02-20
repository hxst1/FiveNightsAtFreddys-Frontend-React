import actionTypes from "./actionTypes";

export const loadRobotsAction = (robotsList) => ({
  type: actionTypes.loadRobots,
  robotsList,
});
