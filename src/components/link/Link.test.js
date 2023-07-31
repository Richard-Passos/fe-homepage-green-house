import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("<Link />", () => {
  it("should render a local link", () => {
    render(<Link href="#" />);

    const link = screen.getByRole("link"),
      targetAtt = link.getAttribute("target");

    expect(targetAtt).toBeFalsy();
  });

  it("should render a external link", () => {
    render(<Link href="https://somewhere.com" />);

    const link = screen.getByRole("link"),
      targetAtt = link.getAttribute("target");

    expect(targetAtt).toBe("_blank");
  });
});
