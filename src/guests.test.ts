import { describe, it, expect } from "vitest";
import { guests } from "./guests";

describe("guests", () => {
  it("should have at least 3 items", () => {
    expect(guests.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'john'", () => {
    expect(guests).toContain("john");
  });
});
