import { loadRobotsAction } from "./actionCreator";

describe("Given a loadRobotsAction function", () => {
  describe("When it receives robots", () => {
    test("Then it should return an action type load-Robots", () => {
      const robotsList = [{ name: "ulegueh" }, { name: "marioh" }];
      const expectedAction = {
        type: "load-Robots",
        robotsList,
      };

      const action = loadRobotsAction(robotsList);

      expect(action).toEqual(expectedAction);
    });
  });
});
