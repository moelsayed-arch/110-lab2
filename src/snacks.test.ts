import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snacks).toContain("chips");
  });
});
<<<<<<< HEAD

=======
>>>>>>> 95c532a3444290818cf74f9b4f7c130a5221cbf3
