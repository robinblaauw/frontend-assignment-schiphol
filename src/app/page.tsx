import { Flights } from "@/components/Flights";
import { Wrapper } from "@/components/ui";

async function getFlights() {
  try {
    let res = await fetch(`http://localhost:3000/api/flights`);
    if (!res.ok) {
      throw new Error(`Failed to fetch flights: ${res.statusText}`);
    }
    let data = await res.json();
    return data?.flightsData?.flights || [];
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
}

export default async function Home() {
  let flights = await getFlights();

  return (
    <Wrapper>
      {flights.length > 0 ? (
        <Flights flights={flights} />
      ) : (
        <p>No flights available at the moment. Please check back later.</p>
      )}
    </Wrapper>
  );
}
