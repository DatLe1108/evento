import { EventoEvent } from "@/lib/type";
import EventCard from "./EventCard";

type EventListProps = {
  city: string;
};

export default async function EventList({ city }: EventListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1110px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
