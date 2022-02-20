import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given a App component", () => {
  describe("When it recive a heading", () => {
    test("Then it render a uwu", () => {
      renderWithProviders(<App />);

      const expectedRole = screen.getByRole("heading", {
        name: "Five Nights at Freddy's",
      });

      expect(expectedRole).toBeInTheDocument();
    });
  });
});
