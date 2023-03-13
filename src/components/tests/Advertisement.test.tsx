import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Advertisement, { AdTestProps } from "../Advertisement";
import { brands } from "../../data/travelerData";

const setup = (props?: AdTestProps) => {
  const initialState = {
    brands: brands,
  };
  return render(<Advertisement {...initialState} {...props} />);
};

describe("Advertisement Component", () => {
  test("Advertisement Component Rendered", () => {
    setup();

    expect(screen.getByTestId("advertisementSection")).toBeInTheDocument();
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("Face-smile");
  });
});
