import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives an object", () => {
    test("It should render the object properties", () => {
      const robot = {
        _id: "6210bb783ff89baa2876e21e",
        name: "Freddy",
        speed: 4,
        endurance: 2,
        date: 1983,
        foto: "https://i.imgur.com/uudB9qC.png",
      };

      render(<Robot robot={robot} />);

      const name = screen.getByText(robot.name);
      const AltImg = screen.getByAltText(robot.name);
      const speed = screen.getByText(`Speed: ${robot.speed}`);
      const date = screen.getByText(`Creation date: ${robot.date}`);

      expect(name).toBeInTheDocument();
      expect(AltImg).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
      expect(date).toBeInTheDocument();
    });
  });
});
