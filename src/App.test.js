import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the employee form", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /add employee/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/department/i)).toBeInTheDocument();
});
