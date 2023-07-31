import { render, screen, fireEvent } from "@testing-library/react";
import NewsletterForm from "./NewsletterForm";

describe("<NewsletterForm />", () => {
  it("should submit only with valid email", () => {
    const handleSubmit = jest.fn((ev) => ev.preventDefault());
    render(<NewsletterForm onSubmit={handleSubmit} />);

    const emailInput = screen.getByRole("textbox"),
      submitButton = screen.getByRole("button", { name: "Assinar Newsletter" });

    fireEvent.change(emailInput, {
      target: { value: "user@example.com" },
    });
    fireEvent.click(submitButton);

    expect(handleSubmit).toBeCalledTimes(1);

    fireEvent.change(emailInput, { target: { value: "user@" } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toBeCalledTimes(1);
  });
});
