import EventCard from "./EventCard";
import { getEvents } from "@/lib/util";
import PaginationControls from "./PaginationControls";
type EventsListProps = {
  city: string;
  page?: number;
};
export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
