import { render, screen } from "@testing-library/react";
import CountdownToast from "./CountdownToast";

describe("<CountdownToast />", () => {
  beforeAll(() => {
    render(<CountdownToast delay={2500} />);
  });

  it("should render a progressbar", () => {
    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toBeTruthy();
  });
});
