import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe.each([["h3"], ["h4"]])("<Title />", (tag) => {
  it(`should render the ${tag} tag`, () => {
    render(<Title as={tag} />);

    const title = screen.getByRole("heading");

    expect(title.tagName.toLowerCase()).toBe(tag);
  });
});
