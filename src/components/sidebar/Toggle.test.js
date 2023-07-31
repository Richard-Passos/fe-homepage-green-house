import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

describe("<Toggle />", () => {
  beforeAll(() => {
    render(<Toggle />);
  });

  it("label should handle click event and change input checked attribute", () => {
    const input = screen.getByRole("checkbox");
    const label = screen.getByRole("switch");

    expect(input.checked).toBeFalsy();

    fireEvent.click(label);

    expect(input.checked).toBeTruthy();

    fireEvent.click(label);

    expect(input.checked).toBeFalsy();
  });
});
