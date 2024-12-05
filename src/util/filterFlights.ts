import { FilterOptions } from "@/constants/flightFilters";
import { FlightType } from "@/types/flights";

const sortFlights = (flights: FlightType[], sortBy: FilterOptions) => {
  if (sortBy === FilterOptions.EARLIEST_TO_LATEST) {
    return flights.sort((a, b) => {
      const dateTimeA = new Date(`${a.date}T${a.expectedTime}`);
      const dateTimeB = new Date(`${b.date}T${b.expectedTime}`);
      return dateTimeA.getTime() - dateTimeB.getTime();
    });
  } else if (sortBy === FilterOptions.LATEST_TO_EARLIEST) {
    return flights.sort((a, b) => {
      const dateTimeA = new Date(`${a.date}T${a.expectedTime}`);
      const dateTimeB = new Date(`${b.date}T${b.expectedTime}`);
      return dateTimeB.getTime() - dateTimeA.getTime();
    });
  }

  return flights;
};
export const filterFlights = (
  flights: FlightType[],
  filter: string,
  sortBy: FilterOptions
): FlightType[] => {
  if (!filter || filter.length < 3) return sortFlights(flights, sortBy);

  console.log(sortBy);
  const lowerCaseFilter = filter.toLowerCase();
  return sortFlights(flights, sortBy)
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
  key: keyof FlightType,
  sortBy: FilterOptions
): FlightType[] => {
  if (!filter || filter.length < 3) return sortFlights(flights, sortBy);

  const lowerCaseFilter = filter.toLowerCase();
  return sortFlights(flights, sortBy)
    .filter((flight) => {
      return flight[key].toLowerCase().includes(lowerCaseFilter);
    })
    .slice(0, 5);
};
