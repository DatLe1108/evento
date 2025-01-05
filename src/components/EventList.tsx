import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";
import PaginationControl from "./PaginationControl";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1110px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControl previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
