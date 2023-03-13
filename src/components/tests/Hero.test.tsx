import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero, { HeroTestProps } from "../Hero";
import { hero } from "../../data/travelerData";

const setup = (props?: HeroTestProps) => {
  const initialState = {
    title: "Explore the beautiful places of the World",
    hero: hero,
  };
  return render(<Hero {...initialState} {...props} />);
};

describe("Hero Component", () => {
  beforeEach(() => {
    setup();
  });
  test("Verify title of Hero Banner", () => {
    expect(
      screen.findByRole("heading", { name: "Its a Big World Out There" })
    );
  });
  test("Verify Subtitle of Hero Banner", () => {
    expect(screen.findByRole("heading", { name: "Go Explore" }));
  });
  test("Verify Text of Hero Banner", () => {
    expect(screen.getByText("We provide you always your dream places. We always make our customer happy by proving many choices.")).toBeInTheDocument()
  });
  test("Verify button1 of Hero Banner", ()=>{
    expect(screen.getByRole("button",{name:"Get Started"})).toBeInTheDocument()
  })
  test("Verify button2 of Hero Banner", ()=>{
    expect(screen.getByRole("button",{name:"Get Demo"})).toBeInTheDocument()
  })
  test("Verify image is rendered for Hero Banner" , ()=>{
    expect(screen.getByAltText("banner-img")).toBeInTheDocument();
})
  
});
