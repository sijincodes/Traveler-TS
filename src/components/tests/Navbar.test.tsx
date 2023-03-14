import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar, { NavbarTestProps } from "../Navbar";
import { navlinks } from "../../data/travelerData";

const setup = (props?: NavbarTestProps) => {
  const initialState = {
    navlinks: navlinks,
  };
  return render(<Navbar {...initialState} {...props} />);
};

describe("Navbar component", () => {
  beforeEach(() => {
    setup();
  });
  test.each(navlinks)("Verify the navbar links", (link) => {
    expect(screen.getByTestId(link.id)).toBeInTheDocument()
  });
});
