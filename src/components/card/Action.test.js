import { render, screen, fireEvent } from "@testing-library/react";
import Action from "./Action";

describe("<Action /> ", () => {
  it("should handle click event", () => {
    const handleClick = jest.fn();
    render(<Action onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
