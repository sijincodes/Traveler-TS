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
  beforeEach(() => {
    setup();
  });

  test.each(brands)(
    "Verify the brand images are rendered in Advertisement component",
    (brand) => {
      const logo = screen.getByTestId(brand.iconSrc);
      expect(logo).toHaveAttribute("src", brand.iconSrc);
    }
  );
});
