import { render, screen } from "@testing-library/react";
import Sidebar from "./Root";

describe("<Sidebar /> ", () => {
  beforeAll(() => {
    render(<Sidebar data-testid="test-id" />);
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
