import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "src/pages/project/[id].tsx";

describe("test", () => {
  it("test", () => {
    render(<Page />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
