import EventCard from "./EventCard";
import { getEvents } from "@/lib/util";
type EventsListProps = {
  city: string;
};
export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
