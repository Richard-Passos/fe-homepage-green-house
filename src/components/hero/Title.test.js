import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe.each([["h2"], ["h5"]])("<Title />", (tag) => {
  it(`should render the ${tag} tag`, () => {
    render(<Title as={tag} />);

    const title = screen.getByRole("heading");

    expect(title.tagName.toLowerCase()).toBe(tag);
  });
});

describe("<Title/>", () => {
  it("should render the default tag", () => {
    render(<Title />);

    const title = screen.getByRole("heading");

    expect(title.tagName.toLowerCase()).toBe("h2");
  });
});
