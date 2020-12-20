import { render, screen } from "@testing-library/react";
import App from "../App.js";
import React from "react";

describe("Form tests", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("title input renders", () => {
    expect(screen.getByLabelText("title-input")).toBeInTheDocument();
  });
  test("note input renders", () => {
    expect(screen.getByLabelText("note-input")).toBeInTheDocument();
  });
  test("date input renders", () => {
    expect(screen.getByLabelText("date-input")).toBeInTheDocument();
  });
  test("project input renders", () => {
    expect(screen.getByLabelText("project-input")).toBeInTheDocument();
  });
  test("add button renders", () => {
    expect(screen.getByLabelText("add-button")).toBeInTheDocument();
  });
});
