import { describe, it, expect, beforeEach } from "vitest";
import { rememberNextPath, takeNextPath } from "@/lib/next-path";

describe("next-path", () => {
  beforeEach(() => localStorage.clear());

  it("returns the remembered course once, then the fallback", () => {
    rememberNextPath("/course/abc");
    expect(takeNextPath("/dashboard")).toBe("/course/abc");
    expect(takeNextPath("/dashboard")).toBe("/dashboard");
  });

  it("ignores off-site targets", () => {
    for (const bad of ["//evil.example", "https://evil.example", "javascript:alert(1)"]) {
      rememberNextPath(bad);
      expect(takeNextPath("/dashboard")).toBe("/dashboard");
    }
  });
});
