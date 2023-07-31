import { render, screen } from "@testing-library/react";
import Subtitle from "./Subtitle";

describe("<Subtitle /> ", () => {
  beforeAll(() => {
    render(<Subtitle data-testid="test-id" />);
  });

  it("should render properly", () => {
    const element = screen.getByTestId("test-id");

    expect(element).toBeTruthy();
  });
});
