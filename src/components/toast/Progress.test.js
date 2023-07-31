import { render, screen } from "@testing-library/react";
import Progress from "./Progress";

describe("<Progress />", () => {
  beforeAll(() => {
    render(<Progress delay={2500} />);
  });

  it("should render properly", () => {
    const element = screen.getByRole("progressbar");

    expect(element).toBeTruthy();
  });
});
