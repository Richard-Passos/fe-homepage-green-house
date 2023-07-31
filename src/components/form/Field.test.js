import { render, screen } from "@testing-library/react";
import Form from "./Root";
import Field from "./Field";

const MockForm = ({ children }) => {
  return <Form>{children}</Form>;
};

describe("<Field /> ", () => {
  beforeAll(() => {
    render(
      <MockForm>
        <Field data-testid="test-id" />
      </MockForm>,
    );
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
