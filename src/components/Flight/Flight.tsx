"use client";
import Link from "next/link";
import { FlightType } from "@/types/flights";
import { convertDate } from "@/util/convertDate";

type Props = {
  flight: FlightType;
};
export const Flight = ({ flight }: Props) => {
  const {
    flightIdentifier,
    flightNumber,
    airport,
    date,
    expectedTime,
    originalTime,
    url,
    score,
  } = flight;

  return (
    <li>
      <Link href={url}>
        <div className="px-8 py-4 bg-white rounded-lg flex flex-col gap-4">
          <div className="flex gap-2">
            <div>{convertDate(date, "nl-NL")}</div>
            <span>-</span>
            <div className="opacity-50">{flightIdentifier}</div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex gap-8">
              <div className="flex flex-col">
                <p>{originalTime}</p>
                <p>{expectedTime}</p>
              </div>

              <div className="flex flex-col">
                <p>
                  <b>{airport}</b>
                </p>
                <p>{flightNumber}</p>
              </div>
            </div>
            <div>{Math.floor(Number(score))}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};
