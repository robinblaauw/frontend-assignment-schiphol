"use client";

import { useState } from "react";
import { Dropdown, Input } from "../ui";
import { FlightType } from "@/types/flights";
import { Flight } from "../Flight";
import { filterFlights } from "@/util/filterFlights";
import { FilterOptions } from "@/constants/flightFilters";
// import { filterFlightsByKey } from "@/util/filterFlights";

type Props = {
  flights: FlightType[];
};
const filterOptions = [
  FilterOptions.EARLIEST_TO_LATEST,
  FilterOptions.LATEST_TO_EARLIEST,
];
export const Flights = ({ flights }: Props) => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState<FilterOptions>(filterOptions[0]);

  const handleFlightsSorting = (newSortValue: string) => {
    setSortBy(newSortValue as FilterOptions);
  };

  return (
    <section className="flex gap-4 flex-col">
      {sortBy}
      <Input
        placeholder="Filter"
        value={filter}
        onChange={(filterValue) => setFilter(filterValue)}
      />
      <Dropdown
        options={filterOptions}
        value={sortBy}
        onChange={handleFlightsSorting}
      />

      {/* Filter that only looks at the key that needs to be filtered on */}
      {/* {filterFlightsByKey(flights, filter, "airport", sortBy).map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))} */}

      {/* Filter that checks the other keys aswel if there is a match in case the user looks for something like flight number */}
      {filterFlights(flights, filter, sortBy).map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))}
    </section>
  );
};
