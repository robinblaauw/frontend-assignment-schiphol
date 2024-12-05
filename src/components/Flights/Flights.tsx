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
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<FilterOptions>(filterOptions[0]);

  const handleFlightsSorting = (newSortValue: string) => {
    setSortBy(newSortValue as FilterOptions);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Input
          placeholder="Search for a flight"
          value={filter}
          onChange={(filterValue) => setFilter(filterValue)}
        />
      </div>
      {/* Filter that only looks at the key that needs to be filtered on */}
      {/* {filterFlightsByKey(flights, filter, "airport", sortBy).map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))} */}

      {/* Filter that checks the other keys aswel if there is a match in case the user looks for something like flight number */}
      <div className="mt-8 mb-4 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-bold text-2xl">All destinations</h2>
          <p className="m-0">Destinations ordered by {sortBy.toLowerCase()}</p>
        </div>
        <Dropdown
          options={filterOptions}
          value={sortBy}
          onChange={handleFlightsSorting}
        />
      </div>
      <ul className="flex gap-2 flex-col">
        {filterFlights(flights, filter, sortBy).map((flight, index) => (
          <Flight key={index} flight={flight} />
        ))}
      </ul>
    </section>
  );
};
