import { render, screen } from "@testing-library/react";
import LayoutHeader from "./LayoutHeader";

const mockItems = [
  { href: "#01", text: "test-01" },
  { href: "#02", text: "test-02" },
  { href: "#03", text: "test-03" },
];

describe("<LayoutHeader />", () => {
  beforeAll(() => {
    render(<LayoutHeader navs={mockItems} />);
  });

  it("should render properly", () => {
    const element = screen.getByRole("banner");

    expect(element).toBeTruthy();
  });
});
