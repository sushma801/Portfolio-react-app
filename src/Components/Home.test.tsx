import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
  it("render home component without crashing", () => {
    let wrapper: HTMLElement;
    const { container } = render(
      <Router>
        <Home />
      </Router>
    );
    wrapper = container;

    expect(wrapper).toBeTruthy();
    // eslint-disable-next-line testing-library/no-node-access
    expect(wrapper.querySelector("h2")).toHaveTextContent(
      "Frontend Developer / Javascript Expert"
    );
  });
});
