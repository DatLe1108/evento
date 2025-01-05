import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function Events({ params }: Props) {
  const { city } = params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && (
          <span>
            Events in <span className="capitalize">{city}</span>
          </span>
        )}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}
