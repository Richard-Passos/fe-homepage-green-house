import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button /> ", () => {
  it("should handle click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
