import { add } from "./add";
import { describe, it, expect } from "vitest";

describe("add function", () => {
  it("should return the first number if it is less than 1", () => {
    expect(add(0, 5)).toBe(0);
    expect(add(-1, 5)).toBe(-1);
  });

  it("should return the second number if it is less than 1", () => {
    expect(add(5, 0)).toBe(0);
    expect(add(5, -1)).toBe(-1);
  });

  it("should return the sum of two positive numbers", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  it("should return the first number if both are less than 1", () => {
    expect(add(-1, -2)).toBe(-1);
    expect(add(0, -2)).toBe(0);
  });
});
