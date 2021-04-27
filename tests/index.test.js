import { render, screen } from "@testing-library/react";
import Layout from "../../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<Layout />);
    expect(
      screen.getByRole("heading", { name: "C'est moi." })
    ).toBeInTheDocument();
  });
});