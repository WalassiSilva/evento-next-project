import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { TEvent } from "@/lib/types";
import { sleep } from "@/lib/util";

type Props = {
  params: { city: string };
};
export default async function EventsPage({ params: { city } }: Props) {
  await sleep(2000);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEvent[] = await response.json();
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1 className="mb-12">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventsList events={events} />
      
    </main>
  );
}
