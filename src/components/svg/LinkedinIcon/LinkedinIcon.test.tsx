import React from "react";
import { render, screen } from "@testing-library/react";
import LinkedinIcon from "./LinkedinIcon";

describe("LinkedinIcon", () => {
  it("should render without errors", () => {
    render(<LinkedinIcon />);
    const element = screen.getByText("LinkedinIcon");
    expect(element).toBeInTheDocument();
  });
});
