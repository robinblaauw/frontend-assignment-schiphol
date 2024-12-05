import { convertDate } from "../convertDate";

describe("convertDate", () => {
  it("converts a valid date string to a localized date in English", () => {
    const result = convertDate("2024-12-05", "en-US");
    expect(result).toBe("December 5, 2024");
  });

  it("converts a valid date string to a localized date in Dutch", () => {
    const result = convertDate("2024-12-05", "nl-NL");
    expect(result).toBe("5 december 2024");
  });

  it("returns 'Invalid Date' for an invalid date string in English", () => {
    const result = convertDate("invalid-date", "en-US");
    expect(result).toBe("Invalid Date");
  });

  it("returns 'Invalid Date' for an invalid date string in Dutch", () => {
    const result = convertDate("invalid-date", "nl-NL");
    expect(result).toBe("Invalid Date");
  });
});
