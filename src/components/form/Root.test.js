import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Root";

describe("<Form />", () => {
  it("should handle submit event", () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(handleSubmit).toBeCalled();
  });
});
