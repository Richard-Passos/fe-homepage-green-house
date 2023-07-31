import { render } from "@testing-library/react";
import LogoSvg from "./Logo";

describe("<LogoSvg />", () => {
  it("should render properly", () => {
    const { container } = render(<LogoSvg />);

    const svgEl = container.querySelector("[data-svg='logo']");

    expect(svgEl).toBeTruthy();
  });
});
