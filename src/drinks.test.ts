import { describe, it, expect } from "vitest";
import { drinks } from "./drinks";

describe("drinks", () => {
  it("should have at least 3 items", () => {
    expect(drinks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Water'", () => {
    expect(drinks).toContain("Water");
  });
});
