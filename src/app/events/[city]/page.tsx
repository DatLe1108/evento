import H1 from "@/components/H1";

type EventsProps = {
  params: {
    city: string;
  };
};

export default function Events({ params }: EventsProps) {
  const { city } = params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && (
          <span>
            Events in <span className="capitalize">{city}</span>
          </span>
        )}
      </H1>
    </main>
  );
}
