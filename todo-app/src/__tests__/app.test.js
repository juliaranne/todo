import App from "../App";
import { render, screen } from "@testing-library/react";

test("should render app", () => {
  render(<App />);

  expect(screen.getByText("Hello")).toBeInTheDocument();
});
