import { render, screen, fireEvent } from "@testing-library/react";
import Submit from "./Submit";

describe("<Submit />", () => {
  it("should handle click event", () => {
    const handleClick = jest.fn();
    render(<Submit onClick={handleClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
