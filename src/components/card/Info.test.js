import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("<Info /> ", () => {
  beforeAll(() => {
    render(<Info data-testid="test-id" />);
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
