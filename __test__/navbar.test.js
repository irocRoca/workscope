import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("NavbarPage", () => {
  it("should render the heading", () => {
    render(<Navbar />);

    const heading = screen.getByText(/workscope/i);
    expect(heading).toBeInTheDocument();
  });
});
