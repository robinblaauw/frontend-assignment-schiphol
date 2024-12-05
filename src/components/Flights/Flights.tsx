"use client";

import { useState } from "react";
import { Input } from "../ui";
import { FlightType } from "@/types/flights";
import { Flight } from "../Flight";
import { filterFlights } from "@/util/filterFlights";

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
      {filterFlights(flights, filter).map((flight, index) => (
        <Flight key={index} flight={flight} />
      ))}
    </section>
  );
};
