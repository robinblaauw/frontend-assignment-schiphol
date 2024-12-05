"use client";

import { useState } from "react";
import { Input } from "../ui";
import { FlightType } from "@/types/flights";
import { Flight } from "../Flight";
import { filterFlights } from "@/util/filterFlights";
// import { filterFlightsByKey } from "@/util/filterFlights";

type Props = {
  flights: FlightType[];
};
export const Flights = ({ flights }: Props) => {
  const [filter, setFilter] = useState("");

  return (
    <section className="flex gap-4 flex-col">
      <Input
        placeholder="Filter"
        value={filter}
        onChange={(filterValue) => setFilter(filterValue)}
      />

      {/* Filter die alleen kijkt naar de key waarop gefiltered moet worden */}
      {/* {filterFlightsByKey(flights, filter, "airport").map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))} */}

      {/* Filter die ook kijkt naar values van andere keys voor een meer geavanceerd filtering systeem */}
      {filterFlights(flights, filter).map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))}
    </section>
  );
};
