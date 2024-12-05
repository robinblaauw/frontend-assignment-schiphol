import { NextResponse } from "next/server";
import flightsData from "@/data/flights.json";

export async function GET() {
  try {
    // Mocked example of an api call
    return NextResponse.json({ flightsData, status: 200 });
  } catch (e) {
    console.error("Error fetching flights data:", e);

    return NextResponse.json({
      error: "Failed to fetch flight data.",
      status: 500,
    });
  }
}
