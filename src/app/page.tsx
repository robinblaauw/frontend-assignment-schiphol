import { Flights } from "@/components/Flights";
import { Wrapper } from "@/components/ui";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/flights");

  if (response.status !== 200) {
    return (
      <div>
        <p>Can not display flights</p>
      </div>
    );
  }

  const data = await response.json();

  return (
    <Wrapper>
      <Flights flights={data.flightsData.flights} />
    </Wrapper>
  );
}
