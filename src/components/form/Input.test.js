import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Root";
import Field from "./Field";
import Input from "./Input";

const MockForm = ({ children }) => {
  return (
    <Form>
      <Field>{children}</Field>
    </Form>
  );
};

describe("<Input />", () => {
  beforeAll(() => {
    render(
      <MockForm>
        <Input />
      </MockForm>,
    );
  });

  it("should change value on change event", () => {
    const input = screen.getByRole("textbox");

    const testValue = "testing";
    fireEvent.change(input, { target: { value: testValue } });

    expect(input.value).toBe(testValue);
  });
});

describe("<Input type='checkbox' />", () => {
  beforeAll(() => {
    render(
      <MockForm>
        <Input type="checkbox" />
      </MockForm>,
    );
  });

  it("should change value on click event", () => {
    const input = screen.getByRole("checkbox");

    expect(input.checked).toBeFalsy();

    fireEvent.click(input);

    expect(input.checked).toBeTruthy();

    fireEvent.click(input);

    expect(input.checked).toBeFalsy();
  });
});
