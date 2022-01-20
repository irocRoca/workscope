import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index.js";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByText(/Find your local contractor/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
