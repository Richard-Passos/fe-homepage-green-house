import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("<Logo />", () => {
  beforeAll(() => {
    render(<Logo />);
  });

  it("should have href and data-tip attributes", () => {
    const link = screen.getByRole("link");

    expect(link.getAttribute("href")).toBe("/");

    const homeReg = /home/i;
    const dataTip = link.getAttribute("data-tip");

    expect(homeReg.test(dataTip)).toBeTruthy();
  });
});
