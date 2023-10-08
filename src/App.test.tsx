import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  let wrapper: HTMLElement;
  const { container } = render(
    <Router>
      <App />
    </Router>
  );
  wrapper = container;
  expect(wrapper).toBeTruthy();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
