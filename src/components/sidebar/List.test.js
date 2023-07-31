import { render, screen, within } from "@testing-library/react";
import List from "./List";

const mockItems = [
  { href: "#01", text: "test-01" },
  { href: "#02", text: "test-02" },
  { href: "#03", text: "test-03" },
];

describe("<List />", () => {
  beforeAll(() => {
    render(<List items={mockItems} />);
  });

  it("should render the correct amount of items", () => {
    const list = screen.getByRole("list");

    const { getAllByRole } = within(list),
      items = getAllByRole("listitem"),
      links = getAllByRole("link");

    expect(items.length).toBe(mockItems.length);
    expect(links.length).toBe(mockItems.length);
  });
});
