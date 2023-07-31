import { render, screen } from "@testing-library/react";
import Img from "./Img";

const mockImgProps = {
  src: "/images/img-for-test.svg",
  alt: "Image for test",
  width: 200,
  height: 200,
};

describe("<Img />", () => {
  it("should render a img", () => {
    render(<Img {...mockImgProps} />);

    const img = screen.getByAltText(mockImgProps.alt);

    expect(img).toBeTruthy();
  });

  it("should render a background img", () => {
    render(
      <Img
        {...mockImgProps}
        bg
        data-testid="bg-image"
      />,
    );

    const bgImg = screen.getByTestId("bg-image"),
      style = window.getComputedStyle(bgImg);

    expect(style.backgroundImage).toBe(`url(${mockImgProps.src})`);
  });
});
