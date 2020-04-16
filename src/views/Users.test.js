import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Users from "./Users";

test("Renders and Has User Prop", () => {
  const { getByTestId } = render(<Users />, { wrapper: MemoryRouter });
  const userList = getByTestId(/userList/i);

  expect(userList).toBeInTheDocument();
});
