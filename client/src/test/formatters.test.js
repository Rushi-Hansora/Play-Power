import { describe, it, expect } from "vitest";
import { formatCurrency, calculateNights, formatDateRange } from "../utils/formatters";

describe("Formatters and Date Utilities", () => {
  it("formats Indian Rupee currency correctly with comma separators", () => {
    expect(formatCurrency(28499)).toBe("₹28,499");
    expect(formatCurrency(5699)).toBe("₹5,699");
    expect(formatCurrency(0)).toBe("₹0");
  });

  it("calculates nights between check-in and checkout correctly", () => {
    expect(calculateNights("2026-05-15", "2026-05-20")).toBe(5);
    expect(calculateNights("2026-05-10", "2026-05-11")).toBe(1);
    expect(calculateNights(null, null)).toBe(5); // fallback default
  });

  it("formats date range properly", () => {
    const range = formatDateRange("2026-05-15", "2026-05-20");
    expect(range).toContain("May 15");
    expect(range).toContain("May 20");
  });
});
