import { fireEvent, render, screen } from "@testing-library/react";
import Create from "../pages/create.js";

describe("Create Page", () => {
  it("button should be disabled if field is empty", () => {
    render(<Create />);
    const button = screen.getByRole("button", { name: /submit/i });
    const title = screen.getByLabelText("Title");
    const price = screen.getByLabelText("Price", { selector: "input" });

    expect(button).toBeInTheDocument();

    expect(title).toHaveValue("");
    expect(price).toHaveValue(null);
    expect(button).toBeDisabled();
  });

  it("Button should be enabled", () => {
    render(<Create />);

    const button = screen.getByRole("button", { name: /submit/i });
    const title = screen.getByLabelText("Title");
    const price = screen.getByLabelText("Price", { selector: "input" });
    fireEvent.change(title, { target: { value: "testing" } });
    fireEvent.change(price, { target: { value: "10" } });
    expect(title).toHaveValue("testing");
    expect(price).toHaveValue(10);
    expect(button).not.toBeDisabled();
  });
});
