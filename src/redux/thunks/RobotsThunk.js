import { createRobotAction, loadRobotsAction } from "../actions/actionCreator";

export const RobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_APIURL);

  const robots = await response.json();
  const robotsList = robots.robots;

  dispatch(loadRobotsAction(robotsList));
};

export const CreateRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}factory?token=${process.env.REACT_APP_TOKEN}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );

  if (!response.ok) return;
  const NewRobot = await response.json();
  dispatch(createRobotAction(NewRobot));
};
