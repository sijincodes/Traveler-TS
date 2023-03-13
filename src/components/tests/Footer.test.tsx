import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer, { FooterTestProps } from "../Footer";
import { footerAPI } from "../../data/travelerData";

const setup = (props?: FooterTestProps) => {
  const initialState = {
    footerAPI: footerAPI,
  };
  return render(<Footer {...initialState} {...props} />);
};

describe("Footer compoenent", () => {
  beforeEach(() => {
    setup();
  });

  test("Verify Footer component column headings", () => {
    expect(
      screen.getByRole("heading", {
        name: "About",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Company",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Support",
      })
    ).toBeInTheDocument();
  });

  test.each(footerAPI.links)(
    "Verify Footer Component List item texts ",
    (elm) => {
      expect(screen.getByText(elm.link)).toBeInTheDocument();
    }
  );
  test.each(footerAPI.sociallinks)(
    "Verify Footer Component Social Media icons ",
    (elm) => {
      expect(screen.getAllByRole("img")).toHaveLength(4);
    }
  );
  test("Verify the copyright text is rendered in Footer", () => {
    expect(screen.getByTestId("copyright-element")).toBeInTheDocument();
  });
});
