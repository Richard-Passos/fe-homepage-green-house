import { render } from "@testing-library/react";
import BlobSvg from "./Blob";

describe("<BlobSvg />", () => {
  it("should render properly", () => {
    const { container } = render(<BlobSvg />);

    const svgEl = container.querySelector("[data-svg='blob']");

    expect(svgEl).toBeTruthy();
  });
});
