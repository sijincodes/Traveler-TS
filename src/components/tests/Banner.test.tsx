import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Banner, { BannerTestProp } from "../Banner";
import { bannerAPI } from "../../data/travelerData";

const setup = (props?: BannerTestProp) => {
  const initialState = {
    bannerAPI: bannerAPI,
  };
  return render(<Banner {...initialState} {...props} />);
};

describe("Banner Component", () => {
  test("Banner component rendered", () => {
    setup();

    expect(screen.getByText("The Greet Outdoors")).toBeInTheDocument();
    expect(
      screen.getByText("Whislist Curated By Travigo.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Explore More" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "banner-img" })).toBeInTheDocument();
  });
});
