import actionTypes from "./actionTypes";

export const loadRobotsAction = (robotsList) => ({
  type: actionTypes.loadRobots,
  robotsList,
});

export const createRobotAction = (NewRobot) => ({
  type: actionTypes.createRobot,
  NewRobot,
});
