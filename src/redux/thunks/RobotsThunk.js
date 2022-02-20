import { loadRobotsAction } from "../actions/actionCreator";

export const RobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_APIURL);

  const robots = await response.json();
  const robotsList = robots.robots;

  dispatch(loadRobotsAction(robotsList));
};
