import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Explore, { ExploreTestProps } from "../Explore";
import { placesAPI } from "../../data/travelerData";

const setup = (props?: ExploreTestProps) => {
  const initialState = {
    title: "Explore the beautiful places of the World",
    placesAPI: placesAPI,
  };
  return render(<Explore {...initialState} {...props} />);
};

describe("Explore Component", () => {
  beforeEach(() => {
    setup();
  });

  test("Explore component rendered", () => {
    expect(
      screen.getByRole("heading", {
        name: "Explore the beautiful places of the World",
      })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(10);
  });

  test.each(placesAPI)(
    "Verify Explore Component Location & Distance text rendered ",
    (place) => {
      expect(
        screen.getByRole("heading", { name: place.location })
      ).toBeInTheDocument();
      expect(screen.getByText(place.distance)).toBeInTheDocument();
    }
  );
});
