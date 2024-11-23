import { TEvent } from "@/lib/types";
import EventCard from "./EventCard";
type EventsListProps = {
  events: TEvent[];
};
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
