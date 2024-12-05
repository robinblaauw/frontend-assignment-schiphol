import { FlightType } from "@/types/flights";

export const filterFlights = (
  flights: FlightType[],
  filter: string
): FlightType[] => {
  if (!filter) return flights;

  const lowerCaseFilter = filter.toLowerCase();
  return flights
    .filter((flight) =>
      Object.values(flight).some((value) =>
        value.toLowerCase().includes(lowerCaseFilter)
      )
    )
    .slice(0, 5);
};

export const filterFlightsByKey = (
  flights: FlightType[],
  filter: string,
  key: keyof FlightType
): FlightType[] => {
  if (!filter) return flights;

  const lowerCaseFilter = filter.toLowerCase();
  return flights
    .filter((flight) => {
      return flight[key].toLowerCase().includes(lowerCaseFilter);
    })
    .slice(0, 5);
};
