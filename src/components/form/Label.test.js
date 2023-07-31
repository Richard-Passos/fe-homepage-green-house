import { render, screen } from "@testing-library/react";
import Form from "./Root";
import Field from "./Field";
import Label from "./Label";

const MockForm = ({ children }) => {
  return (
    <Form>
      <Field>{children}</Field>
    </Form>
  );
};

describe("<Label /> ", () => {
  beforeAll(() => {
    render(
      <MockForm>
        <Label data-testid="test-id" />
      </MockForm>,
    );
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
