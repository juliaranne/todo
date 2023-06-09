import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should display new todos", () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("Enter task"), "My first task");
  userEvent.click(screen.getByText("Submit"));

  expect(screen.getByLabelText("Enter task").value).toBe("");
  expect(screen.getByText("My first task")).toBeInTheDocument();
});
