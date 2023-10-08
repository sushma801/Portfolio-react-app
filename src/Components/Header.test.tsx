/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Routes } from "react-router-dom";
import Headers from "./Headers";

describe("Header component", () => {
  it("should render properly without crashing", () => {
    let wrapper: HTMLElement;
    const { container } = render(
      <Routes>
        <Headers />
      </Routes>
    );
    wrapper = container;
    expect(wrapper).toBeTruthy();
    const anchorTags = wrapper.querySelectorAll("a");
    expect(anchorTags).toHaveLength(4);
    expect(anchorTags[0]).toHaveTextContent("Portfolio");
    expect(anchorTags[0]).toHaveClass("active");
    expect(anchorTags[1]).toHaveTextContent("Home");
    expect(anchorTags[2]).toHaveTextContent("About");
    expect(anchorTags[3]).toHaveTextContent("Contact Me");
    fireEvent.click(anchorTags[2]);
    expect(anchorTags[2]).toHaveClass("active");
  });
});
