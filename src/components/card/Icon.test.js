import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("<Icon /> ", () => {
  beforeAll(() => {
    render(<Icon data-testid="card-icon" />);
  });

  it("should render properly", () => {
    const icon = screen.getByTestId("card-icon");

    expect(icon).toBeTruthy();
  });
});
