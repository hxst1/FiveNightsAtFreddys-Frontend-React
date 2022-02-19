import { loadRobotsAction } from "./actionCreator";

describe("Given a loadRobotsAction function", () => {
  describe("When it receives robots", () => {
    test("Then it should return an action type load-Robots", () => {
      const robots = [{ name: "ulegueh" }, { name: "marioh" }];
      const expectedAction = {
        type: "load-Robots",
        robots,
      };

      const action = loadRobotsAction(robots);

      expect(action).toEqual(expectedAction);
    });
  });
});
