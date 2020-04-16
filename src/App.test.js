import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Login Button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders with Logo img", () => {
  const { getByTestId } = render(<App />);
  const logo = getByTestId(/logoImg/i);
  expect(logo).toBeInTheDocument();
});
