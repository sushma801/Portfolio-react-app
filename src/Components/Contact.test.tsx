/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component render", () => {
  it("should render contact component without crashing", () => {
    let wrapper: HTMLElement;
    const { container } = render(<Contact />);
    wrapper = container;

    expect(wrapper.querySelector("h1")).toHaveTextContent("Contact me");

    expect(wrapper.querySelector("h2")).toHaveTextContent(
      "Fill the form to connect me"
    );
  });
});
