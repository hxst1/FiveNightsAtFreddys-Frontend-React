import { RobotsThunk } from "./RobotsThunk";

describe("Given a loadRobotsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await RobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
