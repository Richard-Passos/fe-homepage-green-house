import { render, screen } from "@testing-library/react";
import Card from "./Root";

describe("<Card /> ", () => {
  beforeAll(() => {
    render(<Card data-testid="test-id" />);
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
