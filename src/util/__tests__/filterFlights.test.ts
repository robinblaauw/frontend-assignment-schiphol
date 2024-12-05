import { filterFlights } from "../filterFlights";
import { FlightType } from "@/types/flights";

const mockFlights: FlightType[] = [
  {
    flightIdentifier: "1",
    flightNumber: "AB123",
    airport: "JFK",
    date: "2024-12-01",
    expectedTime: "10:00",
    originalTime: "09:30",
    url: "http://example.com",
    score: "90",
  },
  {
    flightIdentifier: "2",
    flightNumber: "CD456",
    airport: "LAX",
    date: "2024-12-02",
    expectedTime: "12:00",
    originalTime: "11:30",
    url: "http://example.com",
    score: "85",
  },
];

describe("filterFlights", () => {
  it("returns the first 5 flights if no filter is provided", () => {
    const result = filterFlights(mockFlights, "");
    expect(result).toEqual(mockFlights.slice(0, 5));
  });

  it("filters flights by a partial match (case insensitive)", () => {
    const result = filterFlights(mockFlights, "ab");
    expect(result).toEqual([mockFlights[0]]);
  });

  it("returns up to 5 matching flights", () => {
    const extendedMockFlights = Array(10).fill(mockFlights[0]);
    const result = filterFlights(extendedMockFlights, "ab");
    expect(result.length).toBe(5);
  });

  it("returns an empty array when no flights match", () => {
    const result = filterFlights(mockFlights, "xyz");
    expect(result).toEqual([]);
  });
});
