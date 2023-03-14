import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar, { NavbarTestProps } from "../Navbar";
import { navlinks } from "../../data/travelerData";

const setup = (props?: NavbarTestProps) => {
  const initialState = {
    navlinks: navlinks,
  };
  return render(
    <BrowserRouter>
      <Navbar {...initialState} {...props} />
    </BrowserRouter>
  );
};

describe("Navbar component", () => {
  beforeEach(() => {
    setup();
  });
  test.each(navlinks)("Verify the navbar links", (link) => {
    expect(screen.getByTestId(link.id)).toBeInTheDocument();
  });
});
