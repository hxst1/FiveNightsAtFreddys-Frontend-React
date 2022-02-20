import { render, screen } from "@testing-library/react";
import RobotsList from "./RobotsList";

describe("Given a RobotList component", () => {
  describe("When it receives an array with objects", () => {
    test("It should render a list with the objects", () => {
      const robots = [
        {
          _id: "6210bb783ff89baa2876e21e",
          name: "Freddy",
          speed: 4,
          endurance: 2,
          date: 1983,
          foto: "https://i.imgur.com/uudB9qC.png",
        },
        {
          _id: "6210bb783ff89ba3236e21e",
          name: "Chica",
          speed: 4,
          endurance: 9,
          date: 1983,
          foto: "https://i.imgur.com/3u82ru5.jpg",
        },
      ];

      render(<RobotsList robotsList={robots} />);

      const Name1 = screen.getByText("Freddy");
      const Name2 = screen.getByText("Chica");

      expect(Name1).toBeInTheDocument();
      expect(Name2).toBeInTheDocument();
    });
  });
});
