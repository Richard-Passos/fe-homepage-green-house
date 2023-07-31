import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("<Content />", () => {
  beforeAll(() => {
    render(<Content data-testid="test-id" />);
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
