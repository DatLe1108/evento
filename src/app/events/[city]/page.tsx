import EventList from "@/components/EventList";
import H1 from "@/components/H1";
import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function Events({ params, searchParams }: EventsProps) {
  const { city } = params;
  const parsePage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsePage.success) {
    throw new Error("Invalid page number");
  }

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

      <Suspense key={city + parsePage.data} fallback={<Loading />}>
        <EventList city={city} page={parsePage.data} />
      </Suspense>
    </main>
  );
}
