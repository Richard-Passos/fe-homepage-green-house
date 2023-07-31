import { render, screen } from "@testing-library/react";
import Header from "./Root";

describe("<Header /> ", () => {
  beforeAll(() => {
    render(<Header />);
  });

  it("should render properly", () => {
    const nav = screen.getByRole("navigation");
    const header = screen.getByRole("banner");

    expect(nav).toBeTruthy();
    expect(header).toBeTruthy();
  });
});
