import { render, screen } from "@testing-library/react";
import Content from "./Content";
import React from "react";

describe("Content", () => {
  it("should render without errors", () => {
    render(<Content />);
    const element = screen.getByText("Content");
    expect(element).toBeInTheDocument();
  });
});
