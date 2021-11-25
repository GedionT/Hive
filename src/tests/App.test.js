import { render, screen } from "@testing-library/react";
import App from "../App";

describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true);
  });

  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});

describe("render testing dummy tests", () => {
  test("failing test to check renders learn react link", () => {
    render(<App />);
    expect(screen.getByText("learn react")).toBeInTheDocument();
  });

  test("under construction text rendered", () => {
    render(<App />);
    const linkElement = screen.getByText("Under construction");
    expect(linkElement).toBeInTheDocument();
  });
});
