import { loadRobotsAction } from "../actions/actionCreator";
import RobotsListReducer from "./robotsListReducer";

describe("Given a robotsListReducer reducer", () => {
  describe("When it receives an array with three objects and loadRobotsAction action", () => {
    test("Then it should return the currentShopList", () => {
      const currentRobotsList = [1, 2, 3];

      const expectList = [1, 2, 4];

      const action = loadRobotsAction(expectList);

      const newList = RobotsListReducer(currentRobotsList, action);

      expect(newList).toEqual(expectList);
    });
  });

  describe("When it doesn't receives an action", () => {
    test("Then it should return the same array", () => {
      const currentRobotsList = [];

      const newList = RobotsListReducer(currentRobotsList);

      expect(newList).toEqual(currentRobotsList);
    });
  });

  describe("When it render", () => {
    test("Then it should return length 0", () => {
      const newProjects = RobotsListReducer();

      expect(newProjects).toHaveLength(0);
    });
  });
});
