import { EventoEvent } from "@/lib/type";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventList({ city }: EventListProps) {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1110px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
