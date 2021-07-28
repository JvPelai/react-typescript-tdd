import { render } from "@testing-library/react";
import App from "./App";
import { Heading } from "./Heading";

test("renders hello react", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading with Argument", () => {
  const { getByText } = render(<Heading name={`World`}/>);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
