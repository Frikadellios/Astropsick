import { describe, expect, test } from "bun:test";
// counter.test.tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "../Counter";

describe("App", () => {
  test("counter increments when button is clicked", async () => {
    render(<Counter />);
    const button = screen.getByText("Increment");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("count is 1")).toBeTruthy();
    });
  });
});
