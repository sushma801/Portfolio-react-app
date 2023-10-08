/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  it("should render about component", () => {
    let wrapper: HTMLElement;
    const { container } = render(<About />);
    wrapper = container;
    expect(wrapper.querySelector("h1")).toHaveTextContent("About me");
    const skillsContainer = wrapper.querySelector(".skills-container");
    expect(skillsContainer).toBeTruthy();
    // const skillSets = skillsContainer?.querySelectorAll(".icon-set")[0];
    // expect(skillSets.querySelector("span")).toHaveTextContent("React");
  });
});
